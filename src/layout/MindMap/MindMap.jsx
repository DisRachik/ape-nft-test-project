import { Section, Container, MindMapCard } from "components";
import * as s from "./MindMap.styled";

export const MindMap = () => (
	<Section anchorId="mind-map" title="MIND map">
		<Container>
			<s.CardList>
				<MindMapCard></MindMapCard>
			</s.CardList>
		</Container>
	</Section>
);
