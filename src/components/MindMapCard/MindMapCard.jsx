import PropTypes from "prop-types";

import * as s from "./MindMapCard.styled";

export const MindMapCard = ({ data: { type, title, description, url } }) => (
	<s.CardItem isLink={type === "interactive"}>
		{type === "static" ? (
			<>
				<s.CardText>{description}</s.CardText>
				<s.CardTitle>{title}</s.CardTitle>
			</>
		) : (
			<s.CardLink
				href={url}
				target="_blank"
				rel="noopener  nofollow  noreferrer"
				aria-label="open the link to a new window"
			>
				<s.VectorIcon />
				<s.CardTitle>{title}</s.CardTitle>
			</s.CardLink>
		)}
	</s.CardItem>
);

MindMapCard.propTypes = {
	data: PropTypes.shape({
		type: PropTypes.oneOf(["static", "interactive"]).isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string,
		url: PropTypes.string,
	}).isRequired,
};
