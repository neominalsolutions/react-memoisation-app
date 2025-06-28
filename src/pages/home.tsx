import { Link } from 'react-router';

function HomePage() {
	return (
		<div>
			<h1>App Mode: {import.meta.env.VITE_MODE}</h1>

			<div>
				<Link style={{ padding: 5 }} to="/react-memo">
					react-memo
				</Link>
				<Link style={{ padding: 5 }} to="/use-memo">
					use-memo
				</Link>
				<Link style={{ padding: 5 }} to="/use-callback">
					use-callback
				</Link>
			</div>

			<p>This is the home page of the React Memoisation App.</p>
		</div>
	);
}

export default HomePage;
