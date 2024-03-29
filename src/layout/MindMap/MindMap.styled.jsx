import styled from "@emotion/styled";
import { theme } from "styles";

export const CardList = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: ${theme.spacing(60.5)};
	grid-auto-flow: row;
	grid-gap: ${theme.spacing(5)};

	${theme.mediaMin("dt")} {
		grid-template-rows: ${theme.spacing(120)};
		grid-auto-rows: ${theme.spacing(120)};
		gap: ${theme.spacing(6)} ${theme.spacing(6)};
	}
`;

export const CardItem = styled.li`
	height: 100%;
	padding: ${theme.spacing(6)} ${theme.spacing(3)};

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	background-color: ${theme.colors.bgDark};
	text-transform: uppercase;
	border-radius: ${theme.spacing(4)};
`;
