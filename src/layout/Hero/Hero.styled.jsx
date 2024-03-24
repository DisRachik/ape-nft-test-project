import styled from "@emotion/styled";
import { theme } from "styles";

import imgSmallPng from "src/images/hero/monkey-hero-mb.png";
import imgSmallPng2 from "src/images/hero/monkey-hero-mb@2x.png";
import imgSmall from "src/images/webp/monkey-hero-mb.webp";
import imgSmall2 from "src/images/webp/monkey-hero-mb@2x.webp";
import imgMediumPng from "src/images/hero/monkey-hero-tb.png";
import imgMediumPng2 from "src/images/hero/monkey-hero-tb@2x.png";
import imgMedium from "src/images/webp/monkey-hero-tb.webp";
import imgMedium2 from "src/images/webp/monkey-hero-tb@2x.webp";
import imgBigPng from "src/images/hero/monkey-hero-dt.png";
import imgBigPng2 from "src/images/hero/monkey-hero-dt@2x.png";
import imgBig from "src/images/webp/monkey-hero-dt.webp";
import imgBig2 from "src/images/webp/monkey-hero-dt@2x.webp";

export const Wrap = styled.div`
	width: 100%;

	color: ${theme.colors.darkText};
	text-align: center;

	border-radius: ${theme.spacing(3)};
	background-color: ${theme.colors.bgAccent};
`;

export const Container = styled.div`
	position: relative;
	z-index: 2;

	max-width: ${theme.spacing(86)};
	margin: 0 auto;
	padding: ${theme.spacing(9)} ${theme.spacing(16)} ${theme.spacing(4.75)};

	background-image: url(${imgSmallPng});
	background-image: image-set(
		url(${imgSmall2}) 2x,
		url(${imgSmall}) 1x,
		url(${imgSmallPng2}) 2x,
		url(${imgSmallPng}) 1x
	);
	background-repeat: no-repeat;
	background-position: center bottom 110px;

	${theme.mediaMin("tb")} {
		max-width: ${theme.spacing(184)};
		padding: ${theme.spacing(31)} ${theme.spacing(18)} ${theme.spacing(30.75)};

		background-image: url(${imgMediumPng});
		background-image: image-set(
			url(${imgMedium2}) 2x,
			url(${imgMedium}) 1x,
			url(${imgMediumPng2}) 2x,
			url(${imgMediumPng}) 1x
		);
		background-position: left 45.5% bottom;
	}

	${theme.mediaMin("dt")} {
		max-width: ${theme.spacing(256)};
		padding: ${theme.spacing(49.25)} 0 ${theme.spacing(51.5)};

		background-image: url(${imgBigPng});
		background-image: image-set(url(${imgBig2}) 2x, url(${imgBig}) 1x, url(${imgBigPng2}) 2x, url(${imgBigPng}) 1x);
		/* background-position: center bottom; */
	}
`;

export const Title = styled.h1`
	position: relative;
	z-index: 1;

	margin-bottom: ${theme.spacing(2)};

	font-family: ${theme.fonts.grotesk};
	font-size: ${theme.fontSizes.titlePageMb};
	font-weight: 900;
	line-height: 1;
	letter-spacing: 0.44px;

	white-space: nowrap;

	${theme.mediaMin("tb")} {
		margin-bottom: ${theme.spacing(4)};

		text-align: start;
		font-size: ${theme.fontSizes.titlePageTb};
		letter-spacing: 0.92px;
		word-spacing: 155px;
	}
	${theme.mediaMin("dt")} {
		margin-bottom: ${theme.spacing(7.5)};

		font-size: ${theme.fontSizes.titlePageDt};
		letter-spacing: 1px;
		word-spacing: 257px;
	}
`;

export const Subtitle = styled.p`
	font-family: ${theme.fonts.biro};
	font-size: ${theme.fontSizes.medium};
	font-weight: 400;
	line-height: 1.688;

	${theme.mediaMin("tb")} {
		text-align: start;
		font-size: ${theme.fontSizes.large};
		line-height: 1.65;
	}
	${theme.mediaMin("dt")} {
		font-size: ${theme.fontSizes.big};
		line-height: 1.667;
	}
`;

export const BottomWrap = styled.div`
	margin-top: ${theme.spacing(71.5)};

	display: flex;
	flex-direction: column;
	gap: ${theme.spacing(3)};

	${theme.mediaMin("tb")} {
		position: absolute;
		right: ${theme.spacing(18)};
		bottom: ${theme.spacing(8.75)};

		width: 190px;
		margin-top: 0;
		flex-direction: column-reverse;
	}

	${theme.mediaMin("dt")} {
		right: 0;
		bottom: ${theme.spacing(20)};
		width: 337px;
	}
`;

export const Description = styled.p`
	text-transform: uppercase;

	${theme.mediaMin("tb")} {
		text-align: justify;
		text-indent: 40%;
	}

	${theme.mediaMin("dt")} {
		font-size: ${theme.fontSizes.medium};
		line-height: 1.188;
		text-indent: 25%;
	}
`;
