import React, {
  useState,
  useMemo,
  useEffect,
  useLayoutEffect,
  useRef
} from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

import themes from './styles/themes';


/* NOTE: Utilizando com Class Component.
* Todo componente de ClassComponente PRECISA extender React.Componente
*/
class App extends React.Component {
  state = {
    changed: false,
  };

  /* NOTE: `componentDidMount` seria um `mount` lá no Vue (pegando referência como exemplo).
  * É executado apenas quando é montado o componente, se o o component for renderizado/atualizado,
  * ele não é chamado. Tal como, para esse caso aqui em `ClassComponent`, pegando referência do useEffect
  * utilizado em FunctionComponent, no useEffect seria "todo" o LifeCycle(lido com a montado uma vez, atualização, propriedades para indicadas ao atualizar, desmontagem, etc),
  * onde, se eu quisesse chamar apenas quando o componente é montado, eu passaria useEffect(() => {}, []).
  */
  componentDidMount() {
    console.log('ComponentDidMount executed');
  }

  /* NOTE: `componentDidUpdate` serve como se fosse o `watch` no Vue, porém
  * o único aspecto q pode se diferenciar é q não tem como definir o parametro do valor
  * "atual", pois como pode ver nos parametros, é o valor antigo de propriedades como um todo,
  * e valor antigo dos estados como um todo.
  * `componentDidUpdate` é chamado depois do método `render`, ou seja, depois
  * de ter montado na tela o componente.
  */
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate executed');
    console.log({
      currentState: this.state,
      prevProps,
      prevState,
    });
  }

  /* NOTE: `componentDidCatch` serve para capturar o error que acontece nos componentes filhos.
  * Ou seja, como estou no componente App, se estourar um error no componente Layout por exemplo,
  * eu conseguiria capturar diante desse método.
  */
  componentDidCatch(error, info) {
    console.log({ error, info })
  }

  /* NOTE: `shouldComponentUpdate` é praticamente mesma coisa q o  `componentDidUpdate`.
  * Porém, ele é o único 'hook' que precisa retornar alguma coisa (um booleano no caso),
  * ele é como se fosse o `beforeRouteEnter` no Vue, mas não exatamente,
  * pois aqui o componente já vai estar renderizado.
  * Se eu alterar uma propriedade de state ou prop, vai chamar o `shouldComponentUpdate` primeiro e depois o `componentDidUpdate`.
  * O `shouldComponentUpdate` é como se fose um 'middleware' 
  * Imagine que o `shouldComponentUpdate` é como se fosse uma pergunta como:
  * "O componente deve atualizar?" - true: sim, false: nao.
  * se o retorno for false, então nem vai chegar no `componentDidUpdate`
  */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate Executed : 😌', {
      currentState: this.state,
      nextState,
      nextProps,
    });

    return true;
  }
  
  render() {
    console.log('Rendered');

    return (
      <ThemeProvider>
        <button onClick={() => this.setState({ changed: true, })}>
          Change State
        </button>
        <ThemeContext.Consumer>

          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}

        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}



// NOTE: Utilizando com Hook(Functional Component)
// function App() {
//   const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme') || 'dark'));
// NOTE: useMemo é só para componentes funcionais, ClassComponent ñ têm.
//   const currentTheme = useMemo(() =>
//     themes[theme] || themes.dark,
//   [theme]);

//   const firstRender = useRef(true);

//   function handleToggleTheme() {
//     setTheme(prevState => prevState === 'dark'
//       ? 'light'
//       : 'dark'
//     );
//   }

//   /* "E SE EU QUERO Q NÃO SEJA CHAMADO O useEffect EM CIMA DE UMA PROPRIEDADE PELA 1ª
//   * VEZ QUANDO MONTA A PÁGINA/COMPONENTE??"
//   * O react não tem nem um tratamento para isso, precisamos fazer na "mão" algum tratamento pra isso.
//   * Nesse exemplo, criamos o "firsRender" no qual é um "useRef" que atribui o valor "current" e
//   * conseguimos identificar o valor do mesmo para conseguir manipular sua validez do valor atual,
//   * com isso, fazer qualquer tipo de tratamento. Nesse caso do useEffect abaixo, a primeira vez que
//   * renderizar o componente, não vai cair no console, mas se alterar o estado do atributo 'theme',
//   * dai irá se alterar!
//   * obs: "porque o 'useRef'?" - pois no react a cada alteração do state (o theme para esse exemplo),
//   * renderiza o componente novamente, nesse caso, sempre seria true o "firstRender" mesmo alterando
//   * o valor de 'theme'. O useRef consegue armazenar em memoria o valor "prev", sem a necessidade
//   * de renderizar novamente ele mesmo.
//   */
//   useEffect(() => {
//     if (firstRender.current) {
//       firstRender.current = false;
//       return;
//     }
//     console.debug({ theme });
//   }, [theme]);

//   // USEEFFECT - 1º parametro: Função de efeito
//   /*
//   * Entendesse o useEffect como se fosse uma função chamada a cada vez que o componente/pagina
//   * é atualizado/renderizado.
//   * "Mas eu só quero que seja chamado na primeira vez q é montado o componente/pagina":
//   * Simples, passe um array vazio.
//   * "Mas se eu quero alterar o valor de um estado quando renderizar/autalizar um componente/pagina?"
//   * Passe a definição do estado dentro do array, isso signfica que o useEffect será chamado quando aquela propriedade de estado ser alterada.
//   */

//   // useEffect(() => {
//   //   console.debug('UseEffect executou ao alterar `theme`!');
//   //   localStorage.setItem('theme', JSON.stringify(theme));
//   // }, [theme]);
//   // useLayoutEffect(() => {
//   //   for(let i = 0; i < 20000; i++)
//   //     console.log('useLayoutEffect');
//   // },[theme]);

//   /* A diferença do useEffect para o useLayoutEffect é que useEffect é executado de forma
//   * ASSINCRONA(dps q o usuário tá vendo as alterações na tela), e o useLayoutEffect é 
//   * executado de forma SINCRONA(antes do usuário ver as alterações na tela).
//   */
//   return (
//     <ThemeProvider theme={currentTheme}>
//       <GlobalStyle />
//       <Layout
//         selectedTheme={theme}
//         onToggleTheme={handleToggleTheme}
//       />
//     </ThemeProvider>
//   );
// };

export default App;
