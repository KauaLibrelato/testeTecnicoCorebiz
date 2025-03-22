import "styled-components/native";

declare module "styled-components/native" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            error: string;
            success: string;
            disabled: string;
            placeholder: string;
        };
        fonts: {
            regular: string;
            medium: string;
            semiBold: string;
            bold: string;
        };
    }
}
