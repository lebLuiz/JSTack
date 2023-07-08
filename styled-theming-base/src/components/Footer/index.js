import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

export default function Footer() {
  const {
    theme: selectedTheme,
    handleToggleTheme
  } = useContext(ThemeContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button 
        type="button"
        onClick={handleToggleTheme}
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