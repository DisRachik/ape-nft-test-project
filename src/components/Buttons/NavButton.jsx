import PropTypes from "prop-types";
import * as s from "./NavButton.stuled";

export const NavButton = ({ href, type, aria, isMobileMenu, children }) => {
	const IsBtnComponent = type === "button" ? s.Btn : s.Anchor;
	return (
		<IsBtnComponent href={href} type={type} aria-label={aria} isMobileMenu={isMobileMenu}>
			{children}
		</IsBtnComponent>
	);
};

NavButton.propTypes = {
	href: PropTypes.string,
	type: PropTypes.string,
	aria: PropTypes.string.isRequired,
	isMobileMenu: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.node]).isRequired,
};
