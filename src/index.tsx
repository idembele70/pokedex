import "normalize.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./styles/globalstyle";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./styles/theme";
import DBContextProvider from "./components/context/DBContext";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter basename="/pokedex">
      <GlobalStyle />
      <DBContextProvider>
        <App />
      </DBContextProvider>
    </BrowserRouter>
  </ThemeProvider>
);
