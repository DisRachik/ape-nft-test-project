import { Section, LinkButton } from "components";
import * as s from "./Hero.styled";

export const Hero = () => (
	<Section>
		<s.Wrap>
			<s.Container>
				<s.Subtitle>diD yOu seE iT ?</s.Subtitle>
				<s.Title>YACHT APES</s.Title>
				<s.Subtitle>Apes aRe eveRywhere</s.Subtitle>
				<s.BottomWrap>
					<LinkButton href="#" aria="transfer to Mind map section">
						MEET APES
					</LinkButton>
					<s.Description>Yacht Ape is a collection of unique digital apes that you can own in NFT format</s.Description>
				</s.BottomWrap>
			</s.Container>
		</s.Wrap>
	</Section>
);
