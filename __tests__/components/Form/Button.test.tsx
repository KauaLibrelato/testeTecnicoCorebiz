import { fireEvent } from "@testing-library/react-native";

import { Button } from "../../../src/components";
import { EButtonType } from "../../../src/infra";
import { renderWithTheme } from "../../mocks/renderComponenteWithTheme";
import { mockTheme } from "../../mocks/theme";

describe("Button Component", () => {
    // Testes de renderização geral
    describe("Rendering and Styles", () => {
        it("should render a filled button with text", () => {
            const { getByText } = renderWithTheme(
                <Button text="Click me" type={EButtonType.FILL} bgColor="blue" colorText="white" />,
            );
            const button = getByText("Click me");
            expect(button).toBeTruthy();
        });

        it("should render an outline button with text", () => {
            const { getByText } = renderWithTheme(
                <Button
                    text="Click me"
                    type={EButtonType.OUTLINE}
                    bgColor="blue"
                    colorText="white"
                />,
            );
            const button = getByText("Click me");
            expect(button).toBeTruthy();
        });
    });

    // Testes de comportamento do botão
    describe("Button behavior", () => {
        it("should apply theme primary color when bgColor is not provided for filled button", () => {
            const { getByText } = renderWithTheme(
                <Button text="Click me" type={EButtonType.FILL} colorText="white" />,
            );
            const button = getByText("Click me");
            console.log(button.props.style);
            expect(button).toHaveStyle({ backgroundColor: mockTheme.colors.primary });
        });

        it("should apply theme primary color when bgColor is not provided for outline button", () => {
            const { getByText } = renderWithTheme(
                <Button text="Click me" type={EButtonType.OUTLINE} colorText="white" />,
            );
            const button = getByText("Click me");
            // Alteramos para verificar o estilo diretamente no botão
            expect(button).toHaveStyle({ borderColor: mockTheme.colors.primary });
        });

        it("should disable button and apply opacity when disabled is true", () => {
            const { getByText } = renderWithTheme(
                <Button text="Click me" type={EButtonType.FILL} colorText="white" disabled />,
            );
            const button = getByText("Click me");
            expect(button).toHaveStyle({ opacity: 0.5 });
        });

        it("should call the onPress callback when button is clicked", () => {
            const onPressMock = jest.fn();
            const { getByText } = renderWithTheme(
                <Button
                    text="Click me"
                    type={EButtonType.FILL}
                    colorText="white"
                    onPress={onPressMock}
                />,
            );
            const button = getByText("Click me");
            fireEvent.press(button);
            expect(onPressMock).toHaveBeenCalledTimes(1);
        });
    });

    // Testes de estilo com cores específicas
    describe("Custom Colors", () => {
        it("should apply custom background color when bgColor is provided for filled button", () => {
            const { getByText } = renderWithTheme(
                <Button
                    text="Click me"
                    type={EButtonType.FILL}
                    bgColor="green"
                    colorText="white"
                />,
            );
            const button = getByText("Click me");
            // Alteramos para verificar o estilo diretamente no botão
            expect(button).toHaveStyle({ backgroundColor: "green" });
        });

        it("should apply custom border color when bgColor is provided for outline button", () => {
            const { getByText } = renderWithTheme(
                <Button
                    text="Click me"
                    type={EButtonType.OUTLINE}
                    bgColor="red"
                    colorText="white"
                />,
            );
            const button = getByText("Click me");
            // Alteramos para verificar o estilo diretamente no botão
            expect(button).toHaveStyle({ borderColor: "red" });
        });
    });

    // Testes de texto
    describe("Text Style", () => {
        it("should apply custom text color when colorText is provided", () => {
            const { getByText } = renderWithTheme(
                <Button
                    text="Click me"
                    type={EButtonType.FILL}
                    bgColor="blue"
                    colorText="yellow"
                />,
            );
            const buttonText = getByText("Click me");
            expect(buttonText).toHaveStyle({ color: "yellow" });
        });

        it("should apply default text color when colorText is not provided", () => {
            const { getByText } = renderWithTheme(
                <Button text="Click me" type={EButtonType.FILL} bgColor="blue" />,
            );
            const buttonText = getByText("Click me");
            expect(buttonText).toHaveStyle({ color: mockTheme.colors.background });
        });
    });
});
