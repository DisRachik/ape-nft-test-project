import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import { Logo, NavButton, MenuNav, Social, CopyRight } from "components";
import * as s from "./MobileMenu.styled";

const modalRoot = document.getElementById("modal-root");

export const MobileMenu = ({ isOpen, onClick }) => {
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "visible";
		};
	}, []);

	return createPortal(
		<s.Backdrop isOpen={isOpen}>
			<s.Wrap>
				<Logo isMobileMenu />
				<NavButton type="button" onClick={onClick} aria={isOpen ? "close Menu" : "open Menu"} isMobileMenu>
					{isOpen ? "CLOSE" : "MENU"}
				</NavButton>
			</s.Wrap>
			<Social isMobileMenu />
			<MenuNav isMobileMenu onClick={onClick} />
			<CopyRight />
		</s.Backdrop>,
		modalRoot,
	);
};

MobileMenu.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
};
