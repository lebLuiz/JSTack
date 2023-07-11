import React, { useEffect } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

// NOTE: Utilizando `ClassComponent`
export default class Layout extends React.Component {
  componentDidMount() {
    console.log('componentDidMount Executed: ✅. Componente montou!');
    document.addEventListener('scroll', this.handleScroll);
  }

  /* NOTE: `componentWillUnmount` é chamado antes do componente sumir da tela (desmontado)
  * Ou seja, seria coomo se fosse lá no useEffect pra conseguir capturar a
  * desmontagem do componente.
  */
  componentWillUnmount() {
    console.log('componentWillUnmount Executed: ❌. Componente vai desmontar...');
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log('Scrolled');
  }

  render() {
    return (
      <>
        <Header />
        <PostsList />
        <Footer />
      </>
    );
  }
}



// NOTE: Utilizando `FunctionComponent`
// export default function Layout() {
//   /* 2º Nesse useEffect é onde posso identificar o 'unmounted' q é feito lá no componente App.
//   * Segue o conceito normal do useEffect, porém, onde identifico a "desmontagem" de fato, é
//   * na função passada no `return`.
//   */
//   useEffect(() => {
//     // console.debug({ selectedTheme });
//     return () => {
//       console.debug('<Layout/> saiu da tela.');
//     }
//   }, []);

//   return (
//     <>
//       <Header />
//       <PostsList />
//       <Footer />
//     </>
//   );
// }
