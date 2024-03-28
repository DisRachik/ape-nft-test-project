import styled from "@emotion/styled";
import { theme } from "styles";

const getPositionBlock = ({ isMobileMenu }) => {
	if (isMobileMenu) {
		return {
			position: "absolute",
			top: `${theme.spacing(29.5)}`,
			right: `${theme.spacing(4)}`,
			zIndex: 10000,
		};
	}
	return;
};

export const SocialList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: ${theme.spacing(2)};

	margin-top: ${theme.spacing(2)};

	${getPositionBlock}
`;
