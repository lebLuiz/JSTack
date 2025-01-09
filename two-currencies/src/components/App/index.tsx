import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";

import { Container } from "./styles";
import ToastContainer from "../Toast/ToastContainer";
import Home from "../../pages/Home";

/*
 *   NOTE: Só estou aplicando apenas `Home` pois é o único componente que está sendo utilizado.
 *   Caso tenha mais componentes, é necessário importar e aplicar aqui com o devido roteamento.
 */

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <ToastContainer />
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
