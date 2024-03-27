import styled from "@emotion/styled";
import { theme } from "styles";

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
	width: 100%;
	height: 100%;

	color: ${theme.colors.lightText};
	background-color: black;

	visibility: visible;
	opacity: 1;
	pointer-events: auto;

	transition: ${theme.animation("visibility")};
	transition: ${theme.animation("opacity")};
`;
