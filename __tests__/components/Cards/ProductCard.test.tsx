import { fireEvent } from "@testing-library/react-native";
import React from "react";

import { photoMock } from "../../../__mocks__/photoData";
import { renderWithTheme } from "../../../__mocks__/renderComponenteWithTheme";
import { ProductCard } from "../../../src/components";

describe("ProductCard Component", () => {
    const mockOnPress = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders correctly with all props", () => {
        const { getByTestId, getByText } = renderWithTheme(
            <ProductCard data={photoMock} onPress={mockOnPress} />,
        );

        expect(getByTestId("product-card-touchable")).toBeTruthy();
        expect(getByTestId("product-card-image")).toBeTruthy();
        expect(getByTestId("category-badge")).toBeTruthy();
        expect(getByTestId("texts-container")).toBeTruthy();

        expect(getByText("A beautiful photo")).toBeTruthy();
        expect(getByText("John Doe")).toBeTruthy();
        expect(getByText("Nature")).toBeTruthy();
    });

    it("calls onPress when touchable is pressed", () => {
        const { getByTestId } = renderWithTheme(
            <ProductCard data={photoMock} onPress={mockOnPress} />,
        );

        fireEvent.press(getByTestId("product-card-touchable"));
        expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it("renders correctly when description is missing", () => {
        const photoWithoutDescription = {
            ...photoMock,
            description: undefined,
            alt_description: undefined,
        };

        const { getByText } = renderWithTheme(
            <ProductCard data={photoWithoutDescription} onPress={mockOnPress} />,
        );

        expect(getByText("Without description")).toBeTruthy();
    });

    it("renders correctly when user name is missing", () => {
        const photoWithoutUserName = {
            ...photoMock,
            user: {
                ...photoMock.user,
                name: undefined,
            },
        };

        const { getByText } = renderWithTheme(
            <ProductCard data={photoWithoutUserName} onPress={mockOnPress} />,
        );

        expect(getByText("Unknown user")).toBeTruthy();
    });

    it("renders category from tags when available", () => {
        const { getByText } = renderWithTheme(
            <ProductCard data={photoMock} onPress={mockOnPress} />,
        );

        expect(getByText("Nature")).toBeTruthy();
    });

    it("renders category from topic_submissions when tags are not available", () => {
        const photoWithTopicSubmissions = {
            ...photoMock,
            tags: [],
            topic_submissions: {
                "some-topic": {
                    status: "approved",
                },
            },
        };

        const { getByText } = renderWithTheme(
            <ProductCard data={photoWithTopicSubmissions} onPress={mockOnPress} />,
        );

        expect(getByText("Some topic")).toBeTruthy();
    });

    it("renders default category when neither tags nor topic_submissions are available", () => {
        const photoWithoutCategory = {
            ...photoMock,
            tags: [],
            topic_submissions: {},
        };

        const { getByText } = renderWithTheme(
            <ProductCard data={photoWithoutCategory} onPress={mockOnPress} />,
        );

        expect(getByText("Without category")).toBeTruthy();
    });

    it("applies correct styles to all elements", () => {
        const { getByTestId } = renderWithTheme(
            <ProductCard data={photoMock} onPress={mockOnPress} />,
        );

        const image = getByTestId("product-card-image");
        expect(image.props.style).toEqual({
            width: "100%",
            height: 180,
            marginBottom: 8,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
        });

        const badge = getByTestId("category-badge");
        expect(badge.props.style).toEqual({
            backgroundColor: "#F2F2F2",
            paddingBottom: 4,
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 4,
            position: "absolute",
            top: 8,
            left: 8,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
        });
    });

    it("renders with correct theme colors", () => {
        const { getByText } = renderWithTheme(
            <ProductCard data={photoMock} onPress={mockOnPress} />,
        );

        const categoryText = getByText("Nature");
        const categoryStyle = Array.isArray(categoryText.props.style)
            ? categoryText.props.style[0]
            : categoryText.props.style;

        expect(categoryStyle.color).toBe("#333333");
        expect(categoryStyle.fontFamily).toBe("Helvetica");

        const descriptionText = getByText("A beautiful photo");
        const descriptionStyle = Array.isArray(descriptionText.props.style)
            ? descriptionText.props.style[0]
            : descriptionText.props.style;

        expect(descriptionStyle.color).toBe("#333333");
        expect(descriptionStyle.fontFamily).toBe("Helvetica-Bold");

        const userText = getByText("John Doe");
        const userStyle = Array.isArray(userText.props.style)
            ? userText.props.style[0]
            : userText.props.style;

        expect(userStyle.color).toBe("#333333");
        expect(userStyle.fontFamily).toBe("Helvetica");
    });
});
