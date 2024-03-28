import PropTypes from "prop-types";
import { navList } from "src/data/navList";
import { NavButton } from "components";
import * as s from "./MenuNav.styled";

export const MenuNav = ({ isMobileMenu, onClick }) => {
	return (
		<nav>
			<s.List>
				{navList.map(({ id, name, tegId, aria }) => (
					<s.Item key={id}>
						<NavButton href={`#${tegId}`} onClick={onClick} aria={aria} isMobileMenu={isMobileMenu}>
							{name}
						</NavButton>
					</s.Item>
				))}
			</s.List>
		</nav>
	);
};

MenuNav.propTypes = {
	onClick: PropTypes.func.isRequired,
	isMobileMenu: PropTypes.bool,
};
