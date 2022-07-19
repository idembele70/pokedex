import "normalize.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
body {
  font-family:'Roboto', 'Times New Roman', Times, serif;
  background-color: #F9F9F9;
  min-height: 100vh;
  width: 100vw;
}
`;

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
