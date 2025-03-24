import React from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import * as S from "./InputStyles";

export function Input({
    errorMessage,
    label,
    editable = true,
    ...textInputProps
}: UseControllerProps<FieldValues> &
    TextInputProps & {
        errorMessage?: string;
        label?: string;
        editable?: boolean;
    }) {
    const theme = useTheme();
    return (
        <S.Container testID="input-component">
            {label && (
                <S.Label
                    maxFontSizeMultiplier={1.2}
                    editable={editable}
                    errorMessage={!!errorMessage}
                    testID="input-label"
                >
                    {label}
                </S.Label>
            )}
            <S.Input
                {...textInputProps}
                errorMessage={!!errorMessage}
                editable={editable}
                placeholderTextColor={errorMessage ? theme.colors.error : theme.colors.placeholder}
                maxFontSizeMultiplier={1.2}
                testID="input-field"
            />
            {errorMessage && (
                <S.ErrorMessage testID="input-error" maxFontSizeMultiplier={1.2}>
                    {errorMessage}
                </S.ErrorMessage>
            )}
        </S.Container>
    );
}
