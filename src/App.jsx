import { Hero, About, Header, MindMap, Faq, Arts, Mint, Footer } from "layout";

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<MindMap />
				<Faq />
				<Arts />
				<Mint />
			</main>
			<Footer />
		</>
	);
}

export default App;
