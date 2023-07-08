import React from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

/* NOTE: Utilizando com Class Component.
* Todo componente de ClassComponente PRECISA extender React.Componente
*/
export default class Header extends React.Component {

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme: selectedTheme, handleToggleTheme }) => (
          <Container>
            <h1>JStack`s Blog</h1>
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
        )}
      </ThemeContext.Consumer>
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