"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { AppDataProvider } from "../context/ContactInfoContext";

export default function ClientLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AppDataProvider>
        {children}
      </AppDataProvider>
    </QueryClientProvider>
  );
}
