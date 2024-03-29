import PropTypes from "prop-types";
import { theme } from "styles";

export const PictureEl = ({ image: { img, img2x, webp, webp2x, alt, width, height } }) => (
	<picture>
		{webp.mobile && (
			<source
				srcSet={`${webp.mobile} 1x, ${webp2x.mobile} 2x`}
				type="image/webp"
				media={`(max-width: ${theme.breakpoints.tb})`}
			/>
		)}
		{img.mobile && (
			<source
				srcSet={`${img.mobile} 1x, ${img2x.mobile} 2x`}
				type="image/png"
				media={`(max-width: ${theme.breakpoints.tb})`}
			/>
		)}

		{webp.tablet && (
			<source
				srcSet={`${webp.tablet} 1x, ${webp2x.tablet} 2x`}
				type="image/webp"
				media={`(max-width: ${theme.breakpoints.dt})`}
			/>
		)}
		{img.tablet && (
			<source
				srcSet={`${img.tablet} 1x, ${img2x.tablet} 2x`}
				type="image/png"
				media={`(max-width: ${theme.breakpoints.dt})`}
			/>
		)}

		{webp.desktop && (
			<source
				srcSet={`${webp.desktop} 1x, ${webp2x.desktop} 2x`}
				type="image/webp"
				media={`(min-width: ${theme.breakpoints.dt})`}
			/>
		)}
		{img.desktop && (
			<source
				srcSet={`${img.desktop} 1x, ${img2x.desktop} 2x`}
				type="image/png"
				media={`(min-width: ${theme.breakpoints.dt})`}
			/>
		)}

		<img src={img.desktop} alt={alt} width={width} height={height} loading="lazy" />
	</picture>
);

PictureEl.propTypes = {
	image: PropTypes.shape({
		img: PropTypes.shape({
			mobile: PropTypes.string,
			tablet: PropTypes.string,
			desktop: PropTypes.string.isRequired,
		}).isRequired,
		img2x: PropTypes.shape({
			mobile: PropTypes.string,
			tablet: PropTypes.string,
			desktop: PropTypes.string.isRequired,
		}).isRequired,
		webp: PropTypes.shape({
			mobile: PropTypes.string,
			tablet: PropTypes.string,
			desktop: PropTypes.string.isRequired,
		}).isRequired,
		webp2x: PropTypes.shape({
			mobile: PropTypes.string,
			tablet: PropTypes.string,
			desktop: PropTypes.string.isRequired,
		}).isRequired,
		alt: PropTypes.string.isRequired,
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
	}).isRequired,
};
