import { Section, Container, Slider } from "components";

import { artsList } from "src/data/images.js";

export const Arts = () => (
	<Section anchorId="collection" title="COLLECTION" type="Arts">
		<Container>
			<Slider data={artsList} section="Arts" />
		</Container>
	</Section>
);
