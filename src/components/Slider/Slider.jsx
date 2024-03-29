import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import { MindMapCard, SliderNavButtons } from "components";

import { theme } from "styles";
import "swiper/css";

export const Slider = ({ data }) => {
	return (
		<>
			<Swiper spaceBetween={theme.spacing(6)} slidesPerView={1} speed={500} initialSlide={0}>
				{data.map(itemData => (
					<SwiperSlide key={itemData.id}>
						<MindMapCard data={itemData} />
					</SwiperSlide>
				))}
				<SliderNavButtons />
			</Swiper>
		</>
	);
};

Slider.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}),
	).isRequired,
};
