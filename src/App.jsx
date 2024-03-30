import { Hero, About, Header, MindMap, Arts, Footer } from "layout";

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<MindMap />

				<Arts />
			</main>
			<Footer />
		</>
	);
}

export default App;
