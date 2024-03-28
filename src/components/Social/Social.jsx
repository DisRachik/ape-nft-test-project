import PropTypes from "prop-types";

import { LinkButton } from "components";
import { socialList } from "src/data/socialList.js";
import * as s from "./Social.styled";

export const Social = ({ isMobileMenu }) => {
	return (
		<s.SocialList isMobileMenu={isMobileMenu}>
			{socialList.map(({ id, name, icon, url }) => (
				<li key={id}>
					<LinkButton href={url} aria={`Go to ${name} site`} target isIcon isMobileMenu={isMobileMenu}>
						{icon()}
					</LinkButton>
				</li>
			))}
		</s.SocialList>
	);
};

Social.propTypes = {
	isMobileMenu: PropTypes.bool,
};
