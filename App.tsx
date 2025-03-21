import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import "react-native-gesture-handler";
import { RootStack } from "./src/routes";
export default function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <RootStack />
        </QueryClientProvider>
    );
}
