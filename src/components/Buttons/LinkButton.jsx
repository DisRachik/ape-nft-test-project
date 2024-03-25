import PropTypes from "prop-types";
import { Link } from "./LinkButton.styled";

export const LinkButton = ({ href, aria, target, children, icon }) => {
	return (
		<Link
			href={href}
			target={target && "_blank"}
			rel={target && "noopener  nofollow  noreferrer"}
			aria-label={aria}
			icon={icon}
		>
			{children}
		</Link>
	);
};

LinkButton.propTypes = {
	href: PropTypes.string.isRequired,
	aria: PropTypes.string.isRequired,
	target: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.node]).isRequired,
	icon: PropTypes.bool,
};
