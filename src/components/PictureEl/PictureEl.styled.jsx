import styled from "@emotion/styled";
import { theme } from "styles";

export const ImgWrap = styled.picture`
	width: 100%;
	border-radius: ${theme.spacing(3)};
	overflow: hidden;

	& > img {
		background-color: ${({ transparent }) => transparent ?transparent:theme.colors.bgAlternative};
	}

	${theme.mediaMin("dt")} {
		border-radius: ${theme.spacing(6)};
	}
`;
