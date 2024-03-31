import { Hero, About, Header, MindMap, Faq, Arts, Footer } from "layout";

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
			</main>
			<Footer />
		</>
	);
}

export default App;
