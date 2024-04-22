import React from "react";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai";

export const queryClient = new QueryClient();

export const AppTest = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider></Provider>
    </QueryClientProvider>
  );
};
