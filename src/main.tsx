import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { OverlayProvider } from "overlay-kit";

import App from "./App.tsx";
import CustomThemeProvider from "./contexts/ThemeContext.tsx";
import GlobalStyle from "./styles/global-style.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <CustomThemeProvider>
          <GlobalStyle />
          <App />
        </CustomThemeProvider>
      </OverlayProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
