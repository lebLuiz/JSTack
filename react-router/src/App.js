import React, {
	useState,
} from 'react';

// import GlobalStyle from './styles/global';
import Layout from './components/Layout';

export default function App() {
	const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme') || 'dark'));

	function handleToggleTheme() {
		setTheme(prevState => prevState === 'dark'
			? 'light'
			: 'dark'
		);
	}

	return (
		<>
			
			<Layout
				selectedTheme={theme}
				onToggleTheme={handleToggleTheme}
			/>
		</>
	);
};
