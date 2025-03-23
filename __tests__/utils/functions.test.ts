import { capitalizeFirstLetter, imageFit } from "../../src/utils/functions";

describe("Geral App Function", () => {
    describe("imageFit function", () => {
        it("returns 'cover' when aspect ratio is greater than 1", () => {
            expect(imageFit(200, 100)).toBe("cover");
        });

        it("returns 'contain' when aspect ratio is less than or equal to 1", () => {
            expect(imageFit(100, 200)).toBe("contain");
            expect(imageFit(200, 200)).toBe("contain");
        });
    });

    describe("capitalizeFirstLetter function", () => {
        it("capitalizes the first letter of a string", () => {
            expect(capitalizeFirstLetter("hello")).toBe("Hello");
        });

        it("returns an empty string when no text is provided", () => {
            expect(capitalizeFirstLetter()).toBe("");
        });

        it("capitalizes the first letter even if the text is already capitalized", () => {
            expect(capitalizeFirstLetter("Hello")).toBe("Hello");
        });

        it("capitalizes the first letter of a string with multiple words", () => {
            expect(capitalizeFirstLetter("hello world")).toBe("Hello world");
        });
    });
});
