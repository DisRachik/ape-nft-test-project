import styled from "@emotion/styled";
import { theme } from "styles";

export const FaqList = styled.ul`
	width: 100%;
	& > li:not(:last-of-type) {
		margin-bottom: ${theme.spacing(2)};
		width: 100%;
	}
`;
