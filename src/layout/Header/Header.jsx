import { useState } from "react";

import { Button, Social } from "components";

import * as s from "./Header.styled";

export const Header = () => {
	const [isOpen] = useState(false);
	// setIsOpen

	return (
		<s.Header>
			<s.WrapLogo href="#" aria="brand logo and up to start">
				<s.Logo />
			</s.WrapLogo>
			<s.WrapNavMenu>
				<Button type="button" aria={isOpen ? "close Menu" : "open Menu"}>
					{isOpen ? "CLOSE" : "MENU"}
				</Button>
				<Social />
			</s.WrapNavMenu>
		</s.Header>
	);
};
