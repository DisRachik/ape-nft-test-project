import { useEffect, useState } from "react";
import { navList } from "src/data/navList";
import { NavButton } from "components";
import * as s from "./MenuNav.styled";

export const MenuNav = () => {
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

	return (
		<nav>
			<s.List>
				{navList.map(({ id, name, tegId, aria }) => (
					<s.Item key={id}>
						<NavButton href={`#${tegId}`} aria={aria}>
							{name}
						</NavButton>
					</s.Item>
				))}
			</s.List>
		</nav>
	);
};
