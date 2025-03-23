import { fireEvent } from "@testing-library/react-native";
import React from "react";
import { Keyboard } from "react-native";

import { ScreenContent, Text } from "../../../src/components";
import { renderWithTheme } from "../../mocks/renderComponenteWithTheme";

describe("ScreenContent", () => {
    it("should render children correctly", () => {
        const { getByText } = renderWithTheme(
            <ScreenContent>
                <Text>Test Content</Text>
            </ScreenContent>,
        );

        expect(getByText("Test Content")).toBeTruthy();
    });

    // it("should render scrollable container when isScrollable is true", () => {
    //     const { getByTestId } = render(
    //         <ThemeProvider theme={mockTheme}>
    //             <ScreenContent isScrollable>
    //                 <Text>Scrollable Content</Text>
    //             </ScreenContent>
    //         </ThemeProvider>,
    //     );

    //     const scrollableContainer = getByTestId("scrollable-container");
    //     expect(scrollableContainer).toBeTruthy();
    // });

    // it("should render non-scrollable container when isScrollable is false", () => {
    //     const { getByTestId } = render(
    //         <ThemeProvider theme={mockTheme}>
    //             <ScreenContent isScrollable={false}>
    //                 <Text>Non-scrollable Content</Text>
    //             </ScreenContent>
    //         </ThemeProvider>,
    //     );

    //     const nonScrollableContainer = getByTestId("non-scrollable-container");
    //     expect(nonScrollableContainer).toBeTruthy();
    // });

    it("should dismiss the keyboard when TouchableWithoutFeedback is pressed", () => {
        const dismissKeyboardSpy = jest.spyOn(Keyboard, "dismiss");
        const { getByTestId } = renderWithTheme(
            <ScreenContent>
                <Text>Dismiss Keyboard Test</Text>
            </ScreenContent>,
        );

        const dismissButton = getByTestId("dismiss-button");
        fireEvent.press(dismissButton);
        expect(dismissKeyboardSpy).toHaveBeenCalled();
    });
});
