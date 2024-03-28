import styled from "@emotion/styled";
import { theme } from "styles";

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;

	width: 100%;
	height: 100%;
	padding: ${theme.spacing(18)} ${theme.spacing(4)} ${theme.spacing(20)};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: ${theme.spacing(5)};

	color: ${theme.colors.lightText};
	background-color: black;
`;

export const Wrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
