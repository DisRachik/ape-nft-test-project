import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import { MindMapCard, PictureEl, SliderNavButtons } from "components";

import { theme } from "styles";
import "swiper/css";

export const Slider = ({ data, section }) => {
	const breakpoints = {
		[theme.breakpoints.tb.slice(0, -2) - 0.5]: {
			slidesPerView: 2,
		},
		[theme.breakpoints.dt.slice(0, -2) - 0.5]: {
			slidesPerView: 4,
		},
	};

	return (
		<Swiper spaceBetween={theme.spacing(6)} slidesPerView={1} speed={500} initialSlide={0} breakpoints={breakpoints}>
			{data.map(itemData => (
				<SwiperSlide key={itemData.id}>
					{section === "M-map" && <MindMapCard data={itemData} />}
					{section === "Arts" && <PictureEl image={itemData} />}
				</SwiperSlide>
			))}
			<SliderNavButtons />
		</Swiper>
	);
};

Slider.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}),
	).isRequired,
	section: PropTypes.string.isRequired,
};
