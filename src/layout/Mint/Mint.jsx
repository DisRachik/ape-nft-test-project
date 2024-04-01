import { Section, Container, Form } from "components";

import * as s from "./Mint.styled";

import CrossIcon from "src/icons/cross.svg?react";

export const Mint = () => (
	<Section anchorId="mint" title="Are you in?">
		<Container>
			<s.Wrap>
				<CrossIcon />
				<s.Text>Join the YACHT APE community to be one of the first to receive our limited edition NFT</s.Text>
				<Form />
			</s.Wrap>
		</Container>
	</Section>
);
