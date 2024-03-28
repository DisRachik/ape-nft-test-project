import * as s from "./Logo.styled";
import PropTypes from "prop-types";

export const Logo = ({ isMobileMenu }) => (
	<s.WrapLogo
		href="/ape-nft-test-project/"
		aria-label="brand logo and scroll up to top page"
		isMobileMenu={isMobileMenu}
	>
		<s.LogoIcon />
	</s.WrapLogo>
);

Logo.propTypes = {
	isMobileMenu: PropTypes.bool,
};
