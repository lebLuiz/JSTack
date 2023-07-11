import React from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

function HOC(ComponentHeader) {
  return class Component extends React.Component {
    render(){
      return (
        <ThemeContext.Consumer>
          {(value) => (
            <ComponentHeader {...value} />
          )}
        </ThemeContext.Consumer>
      );
    }
  }
}

/* NOTE: Utilizando com Class Component.
* Todo componente de ClassComponente PRECISA extender React.Componente
*/
class Header extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.theme !== prevProps.theme)
      console.log('Tema mudou');
  }

  render() {
    return (
      <Container>
        <h1>JStack`s Blog</h1>
        <button
          type="button"
          onClick={this.props.handleToggleTheme}
        >
          {
            this.props.theme === 'dark'
              ? '🌞'
              : '🌚'
          }
        </button>
      </Container>
    );
  }

}

export default HOC(Header);

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