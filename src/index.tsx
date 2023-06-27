import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThemeProvider } from "./theme";

import './styles/normalize.css';
import './styles/properties.css';
import './styles/global.css';

const appContainer = document.querySelector('#app');

if (!appContainer) {
  throw new Error('There is no element with "app" id in dom.');
}

const root = createRoot(appContainer);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
