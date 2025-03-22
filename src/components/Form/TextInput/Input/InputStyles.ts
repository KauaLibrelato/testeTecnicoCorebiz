import styled from "styled-components/native";

import { ITheme } from "../../../../theme/utils/types";

interface IInput {
    errorMessage?: boolean;
}

export const Container = styled.View`
    flex: 1;
`;

export const Label = styled.Text`
    font-size: 12px;
    color: ${({ theme, errorMessage }: ITheme & IInput) =>
        errorMessage ? theme.colors.error : theme.colors.primary};
`;

export const Input = styled.TextInput`
    border: 1px solid
        ${({ theme, errorMessage }: ITheme & IInput) =>
            errorMessage ? theme.colors.error : theme.colors.primary};
    border-radius: 16px;
    padding: 8px;
    font-family: ${({ theme }: ITheme) => theme.fonts.regular};
    font-size: 16px;
    color: ${({ theme, errorMessage }: ITheme & IInput) =>
        errorMessage ? theme.colors.error : theme.colors.primary};
    text-align: left;
`;

export const ErrorMessage = styled.Text`
    font-size: 12px;
    color: ${({ theme }: ITheme) => theme.colors.error};
`;
