import { LinkButton } from "components";
import { socialList } from "src/data/social-list.js";
import * as s from "./Social.styled";

export const Social = () => {
	return (
		<s.SocialList>
			{socialList.map(({ id, name, icon, url }) => (
				<li key={id}>
					<LinkButton href={url} aria={`Go to ${name} site`} target icon>
						{icon()}
					</LinkButton>
				</li>
			))}
		</s.SocialList>
	);
};
