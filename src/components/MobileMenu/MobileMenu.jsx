import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import { Logo, NavButton, MenuNav, Social } from "components";
import * as s from "./MobileMenu.styled";

const modalRoot = document.getElementById("modal-root");

export const MobileMenu = ({ isOpen }) =>
	createPortal(
		<s.Backdrop>
			<Logo isMobileMenu />
			<NavButton type="button" aria={isOpen ? "close Menu" : "open Menu"} isMobileMenu>
				{isOpen ? "CLOSE" : "MENU"}
			</NavButton>
			<Social isMobileMenu />
			<MenuNav isMobileMenu />
		</s.Backdrop>,
		modalRoot,
	);

MobileMenu.propTypes = {
	isOpen: PropTypes.bool.isRequired,
};
