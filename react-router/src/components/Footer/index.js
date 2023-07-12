import React from 'react';

import { Container } from './styles';

export default function Footer() {
	const selectedTheme = 'dark';
	return (
		<Container>
			<span>JStack's Blog. Todos os direitos reservados.</span>
			<button 
				type="button"
				onClick={() => {}}
			>
				{
					selectedTheme === 'dark'
						? '🌞'
						: '🌚'
				}
			</button>
		</Container>
	);
}