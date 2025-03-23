import React from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollViewProps,
    TouchableWithoutFeedback,
    ViewProps,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import * as S from "./ScreenContentStyles";
import { IScreenContentProps } from "./utils/types";

export function ScreenContent({
    children,
    isScrollable = false,
}: IScreenContentProps & ScrollViewProps & ViewProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                    accessible={false}
                    testID="dismiss-button"
                >
                    {isScrollable ? (
                        <S.ContainerScroll testID="scrollable-container">
                            {children}
                        </S.ContainerScroll>
                    ) : (
                        <S.Container testID="non-scrollable-container">{children}</S.Container>
                    )}
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
