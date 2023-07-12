import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

export default function Header({
	onToggleTheme, selectedTheme,
}) {
	const history = useHistory();
	console.log(history);

	// NOTE: Para conseguir navegar para outras rotas através de uma ação.
	function handleNavigate() {
		history.push('/');
	}

	return (
		<Container>
			<h1>JStack's Blog</h1>
			<button
				type="button"
				onClick={onToggleTheme || (() => {})}
			>
				{
					selectedTheme && selectedTheme === 'dark'
						? '🌞'
						: '🌚'
				}
			</button>

			<button onClick={handleNavigate} style={{ color: '#FFF' }}>Voltar para a Home 🔜</button>
		</Container>
	);
};