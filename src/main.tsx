import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ENV_VARS } from "./constants/envVariables.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";

const queryClient = new QueryClient();

async function enableMocking() {
  if (ENV_VARS.IS_PROD) return;

  const { worker } = await import("./mocks/msw.ts");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  );
});
