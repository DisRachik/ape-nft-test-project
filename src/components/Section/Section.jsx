import PropTypes from "prop-types";
import { SectionWrap, SectionTitle } from "./Section.styled";

export const Section = ({ anchorId, title, children }) => (
	<SectionWrap id={anchorId}>
		{title && <SectionTitle>{title}</SectionTitle>}
		{children}
	</SectionWrap>
);

Section.propTypes = {
	anchorId: PropTypes.string,
	title: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
};
