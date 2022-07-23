import "normalize.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
body {
  font-family:'Roboto', 'Times New Roman', Times, serif;
  background-color: #F9F9F9;
  min-height: 100vh;
  max-width: 100vw;
}
`;

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
