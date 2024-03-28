import styled from "@emotion/styled";
import { theme } from "styles";

export const CardList = styled.ul`
	display: grid;
	grid-template-columns: 100%;
	grid-auto-rows: ${theme.spacing(60.5)};
	grid-auto-columns: 100%;
	grid-auto-flow: column;

	border-radius: ${theme.spacing(4)};
	overflow: hidden;

	${theme.mediaMin("tb")} {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: ${theme.spacing(60.5)};
		grid-auto-flow: row;
		grid-gap: ${theme.spacing(5)};

		overflow: visible;
	}

	${theme.mediaMin("dt")} {
		grid-template-rows: ${theme.spacing(120)};
		grid-auto-rows: ${theme.spacing(120)};
		gap: ${theme.spacing(6)} ${theme.spacing(6)};
	}
`;
