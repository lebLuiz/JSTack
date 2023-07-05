import React, { useState, useMemo, useEffect, useLayoutEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme') || 'dark'));
  const currentTheme = useMemo(() =>
    themes[theme] || themes.dark,
  [theme]);

  const firstRender = useRef(true);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark'
      ? 'light'
      : 'dark'
    );
  }

  /* "E SE EU QUERO Q NÃO SEJA CHAMADO O useEffect EM CIMA DE UMA PROPRIEDADE PELA 1ª
  * VEZ QUANDO MONTA A PÁGINA/COMPONENTE??"
  * O react não tem nem um tratamento para isso, precisamos fazer na "mão" algum tratamento pra isso.
  * Nesse exemplo, criamos o "firsRender" no qual é um "useRef" que atribui o valor "current" e
  * conseguimos identificar o valor do mesmo para conseguir manipular sua validez do valor atual,
  * com isso, fazer qualquer tipo de tratamento. Nesse caso do useEffect abaixo, a primeira vez que
  * renderizar o componente, não vai cair no console, mas se alterar o estado do atributo 'theme',
  * dai irá se alterar!
  * obs: "porque o 'useRef'?" - pois no react a cada alteração do state (o theme para esse exemplo),
  * renderiza o componente novamente, nesse caso, sempre seria true o "firstRender" mesmo alterando
  * o valor de 'theme'. O useRef consegue armazenar em memoria o valor "prev", sem a necessidade
  * de renderizar novamente ele mesmo.
  */
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    console.debug({ theme });
  }, [theme]);

  // USEEFFECT - 1º parametro: Função de efeito
  /*
  * Entendesse o useEffect como se fosse uma função chamada a cada vez que o componente/pagina
  * é atualizado/renderizado.
  * "Mas eu só quero que seja chamado na primeira vez q é montado o componente/pagina":
  * Simples, passe um array vazio.
  * "Mas se eu quero alterar o valor de um estado quando renderizar/autalizar um componente/pagina?"
  * Passe a definição do estado dentro do array, isso signfica que o useEffect será chamado quando aquela propriedade de estado ser alterada.
  */

  // useEffect(() => {
  //   console.debug('UseEffect executou ao alterar `theme`!');
  //   localStorage.setItem('theme', JSON.stringify(theme));
  // }, [theme]);
  // useLayoutEffect(() => {
  //   for(let i = 0; i < 20000; i++)
  //     console.log('useLayoutEffect');
  // },[theme]);

  /* A diferença do useEffect para o useLayoutEffect é que useEffect é executado de forma
  * ASSINCRONA(dps q o usuário tá vendo as alterações na tela), e o useLayoutEffect é 
  * executado de forma SINCRONA(antes do usuário ver as alterações na tela).
  */
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout
        selectedTheme={theme}
        onToggleTheme={handleToggleTheme}
      />
      
    </ThemeProvider>
  );
};

export default App;
