import { Section, Container, Picture, Banner } from "components";
import * as s from "./About.styled";

import { aboutImg } from "src/data/images.js";

export const About = () => (
	<Section anchorId="about">
		<Container>
			<s.GridWrap>
				<s.Title>
					a Story that started with <s.TitleAccent>one simple{"\n"} ape</s.TitleAccent>
				</s.Title>

				<s.Subtitle>
					WHO GOT FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW THE IDEA OF ESCAPING AND DYNAMIC{"\n"}{" "}
					JOURNEY ON THE{"\n"} YACHT
				</s.Subtitle>

				<s.TextWrap>
					<s.Icon />
					<s.Text>
						<span>
							EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS ARE RANDOMLY GENERATED BY USERS
						</span>
					</s.Text>
				</s.TextWrap>

				<s.PictureWrap>
					<Picture image={aboutImg[0]} />
				</s.PictureWrap>
			</s.GridWrap>
		</Container>
		<Banner />
	</Section>
);
