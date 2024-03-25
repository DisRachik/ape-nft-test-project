import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import CrossIcon from "src/icons/cross.svg?react";
import * as s from "./Banner.styled";

export const Banner = () => {
	const itemRef = useRef(null);
	const textRef = useRef(null);

	useGSAP(() => {
		gsap.fromTo(
			itemRef.current,
			{ x: 0 },
			{
				x: -textRef.current.clientWidth,
				duration: 15,
				repeat: -1,
				yoyo: true,
				ease: "none",
			},
		);
	});
	return (
		<s.Wrap>
			<s.BannerList ref={itemRef}>
				<s.BannerItem>
					<s.TextAD>Destroy stereotypes</s.TextAD>
					<CrossIcon />
				</s.BannerItem>
				<s.BannerItem ref={textRef}>
					<s.TextAD>HAVE NO LIMITS</s.TextAD>
					<CrossIcon />
				</s.BannerItem>
				<s.BannerItem>
					<s.TextAD>Break rules</s.TextAD>
					<CrossIcon />
				</s.BannerItem>
				<s.BannerItem>
					<s.TextAD>Destroy stereotypes</s.TextAD>
					<CrossIcon />
				</s.BannerItem>
				<s.BannerItem>
					<s.TextAD>HAVE NO LIMITS</s.TextAD>
					<CrossIcon />
				</s.BannerItem>
			</s.BannerList>
		</s.Wrap>
	);
};
