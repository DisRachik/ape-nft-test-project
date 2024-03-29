import { useSwiper } from "swiper/react";
import * as s from "./SliderNavButtons.styled";
import { useEffect, useState } from "react";

export const SliderNavButtons = () => {
	const swiper = useSwiper();
	const [isBeginning, setIsBeginning] = useState(swiper?.isBeginning);
	const [isEnd, setIsEnd] = useState(swiper?.isEnd);

	useEffect(() => {
		const updateDisabledState = () => {
			setIsBeginning(swiper.isBeginning);
			setIsEnd(swiper.isEnd);
		};

		if (swiper) {
			swiper.on("slideChange", updateDisabledState);

			return () => swiper.off("slideChange", updateDisabledState);
		}
	}, [swiper]);

	return (
		<s.WrapBtn>
			<s.Btn type="button" onClick={() => swiper.slidePrev()} disabled={isBeginning}>
				Prev
			</s.Btn>
			<s.Btn type="button" onClick={() => swiper.slideNext()} disabled={isEnd}>
				Next
			</s.Btn>
		</s.WrapBtn>
	);
};
