import PropTypes from "prop-types";
import { SectionWrap, SectionTitle } from "./Section.styled";

export const Section = ({ title, children }) => (
	<SectionWrap>
		{title && <SectionTitle>{title}</SectionTitle>}
		{children}
	</SectionWrap>
);

Section.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
	title: PropTypes.string,
};
