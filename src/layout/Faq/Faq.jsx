import { Section, Container, FaqItem } from "components";
import * as s from "./Faq.styled";

export const Faq = () => (
	<Section anchorId="about">
		<Container>
			<s.FaqList role="radiogroup">
				<FaqItem />
			</s.FaqList>
		</Container>
	</Section>
);
