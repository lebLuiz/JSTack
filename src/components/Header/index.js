import React from 'react';

import { Container } from './styles';

/* NOTE: Utilizando com Class Component.
* Todo componente de ClassComponente PRECISA extender React.Componente
*/
export default class Header extends React.Component {

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