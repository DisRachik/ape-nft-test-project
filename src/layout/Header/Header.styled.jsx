import styled from "@emotion/styled";
import { theme } from "styles";

export const Header = styled.header`
	position: absolute;
	top: ${theme.spacing(13.5)};
	left: 50%;
	transform: translateX(-50%);
	z-index: 10;

	width: calc(100% - ${theme.spacing(4)});
	max-width: ${theme.spacing(86)};
	padding: ${theme.spacing(4)} ${theme.spacing(2)};

	color: ${theme.colors.darkText};

	${theme.mediaMin("tb")} {
		max-width: ${theme.spacing(184)};
		padding: ${theme.spacing(5)} ${theme.spacing(3)};
	}

	${theme.mediaMin("dt")} {
		top: ${theme.spacing(4)};
		max-width: ${theme.spacing(310.25)};
		padding: ${theme.spacing(9.75)} ${theme.spacing(3.5)};
	}
`;

export const WrapNavMenu = styled.div`
	overflow: hidden;
	display: flex;

	border-radius: ${theme.spacing(3)};
`;

export const Navigation = styled.div`
	position: absolute;
	top: ${theme.spacing(2)};
	right: ${theme.spacing(2)};

	display: flex;
	flex-direction: column;
	align-items: end;

	${theme.mediaMin("tb")} {
		top: ${theme.spacing(3)};
		right: ${theme.spacing(3)};
	}

	${theme.mediaMin("dt")} {
		top: ${theme.spacing(6)};
		right: ${theme.spacing(3.5)};
	}
`;
