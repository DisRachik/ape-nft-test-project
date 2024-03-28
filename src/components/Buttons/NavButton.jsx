import PropTypes from "prop-types";
import * as s from "./NavButton.stuled";

export const NavButton = ({ href, type, aria, isMobileMenu, onClick, children }) => {
	const IsBtnComponent = type === "button" ? s.Btn : s.Anchor;
	return (
		<IsBtnComponent href={href} onClick={onClick} type={type} aria-label={aria} isMobileMenu={isMobileMenu}>
			{children}
		</IsBtnComponent>
	);
};

NavButton.propTypes = {
	href: PropTypes.string,
	type: PropTypes.string,
	aria: PropTypes.string.isRequired,
	isMobileMenu: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.node]).isRequired,
};
