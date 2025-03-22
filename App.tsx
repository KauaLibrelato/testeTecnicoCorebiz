import {
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    useFonts,
} from "@expo-google-fonts/inter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { RootStack } from "./src/routes";
import { ThemeProvider } from "./src/theme/Theme";
export default function App() {
    const queryClient = new QueryClient();
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
    });

    useEffect(() => {
        const loadResources = async () => {
            if (fontsLoaded) {
                await SplashScreen.hideAsync();
            }
        };

        loadResources();
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <SafeAreaProvider>
                    <StatusBar style="dark" translucent />
                    <RootStack />
                </SafeAreaProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
