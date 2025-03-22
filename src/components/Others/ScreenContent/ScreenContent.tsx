import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import * as S from "./ScreenContentStyles";
import { IScreenContentProps } from "./utils/types";

export function ScreenContent({ children, isScrollable = false }: IScreenContentProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    {isScrollable ? (
                        <S.ContainerScroll>{children}</S.ContainerScroll>
                    ) : (
                        <S.Container>{children}</S.Container>
                    )}
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
