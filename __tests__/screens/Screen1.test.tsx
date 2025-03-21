import { render } from "@testing-library/react-native";
import React from "react";

import { Screen1 } from "../../src/screens";

describe("Details", () => {
    it("should render the title with the user name", () => {
        const { getByText } = render(<Screen1 />);

        expect(getByText("Screen1")).toBeTruthy();
    });
});
