import { useEffect, useState } from "react";

import { Logo, NavButton, MenuNav, Social, MobileMenu } from "components";

import * as s from "./Header.styled";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 767px)").matches);

	useEffect(() => {
		const smallMediaQuery = window.matchMedia("(max-width: 767px)");

		const handleSmallChange = () => {
			setIsMobile(prevState => !prevState);
		};

		smallMediaQuery.addEventListener("change", handleSmallChange);

		return () => {
			smallMediaQuery.removeEventListener("change", handleSmallChange);
		};
	}, []);

	const toggleMenu = () => setIsOpen(prevState => !prevState);

	return (
		<s.Header>
			<Logo />
			<s.Navigation>
				<s.WrapNavMenu>
					{isOpen &&
						(isMobile ? <MobileMenu isOpen={isOpen} onClick={toggleMenu} /> : <MenuNav onClick={toggleMenu} />)}

					<NavButton type="button" onClick={toggleMenu} aria={isOpen ? "close Menu" : "open Menu"}>
						{isOpen ? "CLOSE" : "MENU"}
					</NavButton>
				</s.WrapNavMenu>
				<Social />
			</s.Navigation>
		</s.Header>
	);
};
