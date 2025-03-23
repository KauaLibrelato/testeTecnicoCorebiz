import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { mockTheme } from "./theme";

export const renderWithTheme = (ui: React.ReactElement) =>
    render(<ThemeProvider theme={mockTheme}>{ui}</ThemeProvider>);
