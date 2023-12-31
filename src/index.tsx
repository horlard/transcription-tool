import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import { GlobalStyles as BaseStyles } from "twin.macro";
import reportWebVitals from "./reportWebVitals";

import App from "./app";

import GlobalStyles from "./app/styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BaseStyles />
    <Global styles={GlobalStyles} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
