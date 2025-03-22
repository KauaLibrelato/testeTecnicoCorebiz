import styled from "styled-components/native";

import { ITextProps } from "./utils/types";

export const Text = styled.Text`
    font-size: ${({ fontSize }: ITextProps) => fontSize || 16}px;
    color: ${({ color }: ITextProps) => color || "#000"};
    font-family: ${({ fontFamily }: ITextProps) => fontFamily || "Arial"};
`;
