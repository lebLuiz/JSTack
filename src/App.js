import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme') || 'dark'));
  const currentTheme = useMemo(() =>
    themes[theme] || themes.dark,
  [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark'
      ? 'light'
      : 'dark'
    );
  }

  // 1º parametro: Função de efeito
  /*
  * Entendesse o useEffect como se fosse uma função chamada a cada vez que o componente/pagina
  * é atualizado/renderizado.
  * "Mas eu só quero que seja chamado na primeira vez q é montado o componente/pagina":
  * Simples, passe um array vazio.
  * "Mas se eu quero alterar o valor de um estado quando renderizar/autalizar um componente/pagina?"
  * Passe a definição do estado dentro do array, isso signfica que o useEffect será chamado quando aquela propriedade de estado ser alterada.
  */

  useEffect(() => {
    console.debug('UseEffect executou ao alterar `theme`!');
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      
      <button onClick={handleToggleTheme}>Toggle</button>
      {theme === 'dark' && (
        /* 1º Aqui é um caso para mostrar o 'unmounted' do lifecycle do React.
        * Com essa condição, caso seja false, o React de fato não renderiza no DOM,
        * ou seja, há uma "desmontagem" do componente Layout (vá até o componente Layout)
        */
        <Layout
          selectedTheme={theme}
          onToggleTheme={handleToggleTheme}
        />
      )}
    </ThemeProvider>
  );
};

export default App;
