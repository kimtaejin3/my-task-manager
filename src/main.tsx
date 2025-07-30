import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import App from "./App.tsx";
import GlobalStyle from "./styles/global-style.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </StrictMode>
);
