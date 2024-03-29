import { Section, Container, Slider, MindMapCard } from "components";
import { useEffect, useState } from "react";

import * as s from "./MindMap.styled";

import { mindMapList } from "src/data/mindMapList.js";

export const MindMap = () => {
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
		<Section anchorId="mind-map" title="MIND map">
			<Container>
				{isMobile ? (
					<Slider data={mindMapList} section="M-map" />
				) : (
					<s.CardList>
						{mindMapList.map(data => (
							<li key={data.id}>
								<MindMapCard data={data} />
							</li>
						))}
					</s.CardList>
				)}
			</Container>
		</Section>
	);
};
