import { Image } from "expo-image";
import styled from "styled-components/native";

import { ITheme } from "../../../theme/utils/types";

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    overflow: hidden;
    background-color: ${({ theme }: ITheme) => theme.colors.background};
    margin-bottom: 16px;
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

export const FavoriteButton = styled.TouchableOpacity`
    padding: 8px;
    border-radius: 16px;
    position: absolute;
    top: 0px;
    right: 0px;
`;

export const TextsContainer = styled.View`
    gap: 4px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }: ITheme) => theme.fonts.bold};
    color: ${({ theme }: ITheme) => theme.colors.primary};
`;

export const Description = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }: ITheme) => theme.fonts.medium};
    color: ${({ theme }: ITheme) => theme.colors.primary};
`;
