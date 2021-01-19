import React, { useMemo } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

import store from "./store.js";
import TwitterContainer from "./container/TwitterContainer/TwitterContainer";

import { lightTheme, darkTheme } from "./theme";
import { useDarkMode } from "./utils/hooks/useTheme";
import { AppContainer } from "./App.styles.js";

// Add global styles
const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
   padding: 0;
   background: ${({ theme }) => theme.body};
   color: ${({ theme }) => theme.text};
 }
`;

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = useMemo(
    () => (theme === "light" ? lightTheme : darkTheme),
    [theme]
  );

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <AppContainer>
          <Navbar
            className="justify-content-between"
            bg={theme}
            variant={theme}
          >
            <Navbar.Brand href="#">Twitter-Like</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="switch-text-left">Light</Navbar.Text>
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={theme === "dark"}
                onChange={themeToggler}
              />
              <Navbar.Text className="switch-text-right">Dark</Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
          <TwitterContainer />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
