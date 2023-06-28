import { createRoot } from "react-dom/client";
import { App } from "@/app";
import { ThemeProvider } from "@/shared/providers/theme";
import { BrowserRouter } from "react-router-dom";

import '@/app/styles/normalize.css';
import '@/app/styles/properties.css';
import '@/app/styles/global.css';

const appContainer = document.querySelector('#app');

if (!appContainer) {
  throw new Error('There is no element with "app" id in dom.');
}

const root = createRoot(appContainer);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
