import * as s from "./MindMapCard.styled";

import { mindMapList } from "src/data/mindMapList.js";

export const MindMapCard = () =>
	mindMapList.map(({ id, type, description, title, url }) => (
		<s.CardItem key={id} isLink={type === "interactive"}>
			{type === "static" ? (
				<>
					<s.CardText>{description}</s.CardText>
					<s.CardTitle>{title}</s.CardTitle>
				</>
			) : (
				<s.CardLink
					href={url}
					type="_blank"
					rel="noopener  nofollow  noreferrer"
					aria-label="open the link to a new window"
				>
					<s.VectorIcon />
					<s.CardTitle>{title}</s.CardTitle>
				</s.CardLink>
			)}
		</s.CardItem>
	));
