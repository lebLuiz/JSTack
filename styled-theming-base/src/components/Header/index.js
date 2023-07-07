import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

/* NOTE: Utilizando com Class Component.
* Todo componente de ClassComponente PRECISA extender React.Componente
*/
export default class Header extends React.Component {
  /* CAS0 1 - NOTE: Para utilizar `propTypes` em ClassComponent,
  * precisa definir o `propTypes` como `static`.
  * "por que?", pois em algum lugar que pegar a instancia de `Header`(por exemplo),
  * vai conseguir ter acessos ao propTypes, sendo assim, podendo ser possivel
  * alterar o valor (algo nada adequado).
  */
  static propTypes = {
    selectedTheme: PropTypes.string.isRequired,
    onToggleTheme: PropTypes.func.isRequired,
  };

  render() {
    const {
      onToggleTheme,
      selectedTheme,
    } = this.props;

    return (
      <Container>
        <h1>JStack`s Blog</h1>
        <button
          type="button"
          onClick={onToggleTheme}
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

}

// CASO 2 - NOTE: Posso utilizar `propTypes` assim também.
// Header.propTypes = {
//   selectedTheme: PropTypes.string.isRequired,
//   onToggleTheme: PropTypes.func.isRequired,
// }



// NOTE: Utilizando com Hook(Functional Component)
// export default function Header({
//   onToggleTheme, selectedTheme,
// }) {
//   return (
//     <Container>
//       <h1>JStack's Blog</h1>
//       <button
//         type="button"
//         onClick={onToggleTheme}
//       >
//         {
//           selectedTheme === 'dark'
//             ? '🌞'
//             : '🌚'
//         }
//       </button>
//     </Container>
//   );
// }