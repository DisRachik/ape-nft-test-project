import { PictureEl } from "components";
import * as s from "./FaqItem.styled";

import { faqList } from "src/data/faqList.js";
import { useEffect, useState } from "react";

export const FaqItem = () => {
	const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 767px)").matches);
	const [selectedFaqIndex, setSelectedFaqIndex] = useState(0);

	useEffect(() => {
		const smallMediaQuery = window.matchMedia("(max-width: 767px)");

		const handleSmallChange = () => {
			setIsMobile(prevState => !prevState);
		};

		smallMediaQuery.addEventListener("change", handleSmallChange);

		return () => {
			smallMediaQuery.removeEventListener("change", handleSmallChange);
		};
	}, []);

	return faqList.map((card, index) => (
		<s.ItemWrap
			role="radio"
			aria-checked={index === selectedFaqIndex}
			aria-labelledby="frequently-question"
			key={card.id}
		>
			<s.Label>
				<s.Input
					type="radio"
					name="faq-item"
					checked={index === selectedFaqIndex}
					onChange={() => setSelectedFaqIndex(index)}
				/>
				<s.LabelType>
					{!isMobile && <PictureEl image={card} />}
					<s.ListNumber>[ {index + 1} ]</s.ListNumber>
					<div>
						<s.Ask>{card.ask}</s.Ask>
						<s.Answer>{card.answer}</s.Answer>
					</div>
				</s.LabelType>
			</s.Label>
		</s.ItemWrap>
	));
};
