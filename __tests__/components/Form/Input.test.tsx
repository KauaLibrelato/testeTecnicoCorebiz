import { useTheme } from "styled-components";

import { renderWithTheme } from "../../../__mocks__/renderComponenteWithTheme";
import { mockTheme } from "../../../__mocks__/theme";
import { Input } from "../../../src/components/Form/TextInput/Input/Input";

jest.mock("styled-components", () => ({
    ...jest.requireActual("styled-components"),
    useTheme: jest.fn(),
}));

describe("Input Component", () => {
    beforeEach(() => {
        (useTheme as jest.Mock).mockReturnValue(mockTheme);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render correctly without optional props", () => {
        const { getByTestId } = renderWithTheme(<Input name="test" />);
        expect(getByTestId("input-component")).toBeTruthy();
    });

    it("should render with label when provided", () => {
        const labelText = "Test Label";
        const { getByText } = renderWithTheme(<Input name="test" label={labelText} />);
        expect(getByText(labelText)).toBeTruthy();
    });

    it("should not render label when not provided", () => {
        const { queryAllByTestId } = renderWithTheme(<Input name="test" />);
        expect(queryAllByTestId("input-label").length).toBe(0);
    });

    it("should render error message when provided", () => {
        const errorText = "Test Error";
        const { getByText } = renderWithTheme(<Input name="test" errorMessage={errorText} />);
        expect(getByText(errorText)).toBeTruthy();
    });

    it("should not render error message when not provided", () => {
        const { queryAllByTestId } = renderWithTheme(<Input name="test" />);
        expect(queryAllByTestId("input-error").length).toBe(0);
    });

    it("should apply error styles when errorMessage is present", () => {
        const { getByTestId } = renderWithTheme(<Input name="test" errorMessage="Error" />);
        const input = getByTestId("input-field");
        expect(input.props.style.borderColor).toBe(mockTheme.colors.error);
    });

    it("should apply primary color styles when no error", () => {
        const { getByTestId } = renderWithTheme(<Input name="test" />);
        const input = getByTestId("input-field");
        expect(input.props.style.borderColor).toBe(mockTheme.colors.primary);
    });

    it("should apply correct placeholder color when error is present", () => {
        const { getByTestId } = renderWithTheme(
            <Input name="test" errorMessage="Error" placeholder="Placeholder" />,
        );
        const input = getByTestId("input-field");
        expect(input.props.placeholderTextColor).toBe(mockTheme.colors.error);
    });

    it("should apply correct placeholder color when no error", () => {
        const { getByTestId } = renderWithTheme(<Input name="test" placeholder="Placeholder" />);
        const input = getByTestId("input-field");
        expect(input.props.placeholderTextColor).toBe(mockTheme.colors.placeholder);
    });

    it("should be editable by default", () => {
        const { getByTestId } = renderWithTheme(<Input name="test" />);
        const input = getByTestId("input-field");
        expect(input.props.editable).toBe(true);
    });

    it("should not be editable when editable prop is false", () => {
        const { getByTestId } = renderWithTheme(<Input name="test" editable={false} />);
        const input = getByTestId("input-field");
        expect(input.props.editable).toBe(false);
    });

    it("should pass all TextInput props to the underlying TextInput", () => {
        const placeholder = "Test Placeholder";
        const value = "Test Value";
        const onChangeText = jest.fn();

        const { getByTestId } = renderWithTheme(
            <Input
                name="test"
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />,
        );

        const input = getByTestId("input-field");
        expect(input.props.placeholder).toBe(placeholder);
        expect(input.props.value).toBe(value);
        expect(input.props.onChangeText).toBe(onChangeText);
    });

    it("should apply correct styles to label when error is present", () => {
        const { getByTestId } = renderWithTheme(
            <Input name="test" label="Label" errorMessage="Error" />,
        );
        const label = getByTestId("input-label");
        expect(label.props.style.color).toBe(mockTheme.colors.error);
    });

    it("should apply correct styles to label when no error", () => {
        const { getByTestId } = renderWithTheme(<Input name="test" label="Label" />);
        const label = getByTestId("input-label");
        expect(label.props.style.color).toBe(mockTheme.colors.primary);
    });
});
