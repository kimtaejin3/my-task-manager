import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import App from "./App.tsx";
import CustomThemeProvider from "./context/ThemeContext.tsx";
import GlobalStyle from "./styles/global-style.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CustomThemeProvider>
        <GlobalStyle />
        <App />
      </CustomThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
