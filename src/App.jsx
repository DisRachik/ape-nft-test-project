import reactLogo from "src/icons/logo.svg";
import viteLogo from "src/icons/logo.svg";
import Logo from "src/icons/meta-mask-color.svg?react";

import imgDtPng from "src/images/hero/monkey-hero-dt.png";
import imgDtPng2 from "src/images/hero/monkey-hero-dt@2x.png";
import imgDt from "src/images/webp/monkey-hero-dt.webp";
import imgDt2 from "src/images/webp/monkey-hero-dt@2x.webp";

function App() {
	return (
		<>
			<div>
				<Logo />
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>

			<picture>
				<source srcSet={`${imgDt} 1x, ${imgDt2} 2x`} type="image/webp" media="(min-width: 768px)" />
				<source srcSet={`${imgDtPng} 1x, ${imgDtPng2} 2x`} type="image/png" media="(min-width: 768px)" />
				<img src={imgDtPng} alt="S’mores Frappuccino" width="480" height="480" loading="lazy" />
			</picture>

			<p>Vite + React</p>
		</>
	);
}

export default App;
