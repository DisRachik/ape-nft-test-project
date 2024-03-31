import { PictureEl } from "components";
import * as s from "./FaqItem.styled";

import { faqList } from "src/data/faqList.js";
import { useState } from "react";

export const FaqItem = () => {
	const [selectedFaqIndex, setSelectedFaqIndex] = useState(0);

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
					<s.ImgWrap>
						<PictureEl image={card} />
					</s.ImgWrap>
					<s.ListNumber>[ {index + 1} ]</s.ListNumber>
					<s.Description>
						<s.Ask>{card.ask}</s.Ask>
						<s.Answer>{card.answer}</s.Answer>
					</s.Description>
				</s.LabelType>
			</s.Label>
		</s.ItemWrap>
	));
};
