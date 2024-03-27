import { useState } from "react";

import { Logo, NavButton, MenuNav, Social, MobileMenu } from "components";

import * as s from "./Header.styled";

export const Header = () => {
	const [isOpen] = useState(false);
	// setIsOpen

	return (
		<s.Header>
			<Logo />
			<s.Navigation>
				<s.WrapNavMenu>
					<MenuNav />
					{/* <MobileMenu isOpen={isOpen} /> */}

					<NavButton type="button" aria={isOpen ? "close Menu" : "open Menu"}>
						{isOpen ? "CLOSE" : "MENU"}
					</NavButton>
				</s.WrapNavMenu>
				<Social />
			</s.Navigation>
		</s.Header>
	);
};
