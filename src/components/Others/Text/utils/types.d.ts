import { TextProps } from "react-native";

export interface ITextProps extends TextProps {
    children: string | string[];
    fontSize?: number;
    color?: string;
    fontFamily?: string;
}
