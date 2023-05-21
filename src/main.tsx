import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ThemeManagerProvider, GlobalStyle } from "theme";
import { store } from "redux/store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="">
        <ThemeManagerProvider>
          <App />
          <GlobalStyle />
        </ThemeManagerProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
