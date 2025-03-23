import { Image } from "expo-image";
import styled from "styled-components/native";

import { ITheme } from "../../../theme/utils/types";

export const Container = styled.View.attrs({
    elevation: 5,
    shadowColor: "#333333",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
})``;

export const TouchableContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    overflow: hidden;
    background-color: white;
    margin-bottom: 16px;
    border-radius: 16px;
`;

export const Miniature = styled(Image)`
    width: 100%;
    height: 180px;
    border-radius: 16px;
    margin-bottom: 8px;
`;

export const CategoryBadge = styled.View`
    background-color: ${({ theme }: ITheme) => theme.colors.background};
    padding: 4px 8px;
    border-radius: 16px;
    position: absolute;
    top: 8px;
    left: 8px;
`;

export const CategoryBadgeText = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }: ITheme) => theme.fonts.medium};
    color: ${({ theme }: ITheme) => theme.colors.primary};
`;

export const TextsContainer = styled.View`
    gap: 4px;
    padding: 0 8px 8px 8px;
`;
