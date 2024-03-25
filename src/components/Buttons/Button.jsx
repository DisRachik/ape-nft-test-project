import PropTypes from "prop-types";
import * as s from "./Button.stuled";

export const Button = ({ type, aria, children }) => (
	<s.Btn type={type} aria-label={aria}>
		{children}
	</s.Btn>
);

Button.propTypes = {
	type: PropTypes.string.isRequired,
	aria: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.node]).isRequired,
};
