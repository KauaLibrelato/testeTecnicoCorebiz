import { Image as ExpoImage } from "expo-image";
import { Animated } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { ITheme } from "../../theme/utils/types";

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    margin-bottom: 1000px;
`;

export const Header = styled.View``;

export const BackButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    z-index: 3;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }: ITheme) => theme.colors.background};
    position: absolute;
    top: ${initialWindowMetrics?.insets.top}px;
    left: 16px;
    border: 1px solid ${({ theme }: ITheme) => theme.colors.secondary};
`;

export const ImageContainer = styled.View``;

export const Image = styled(Animated.createAnimatedComponent(ExpoImage))`
    width: 100%;
    height: 350px;
`;

export const Body = styled.View`
    padding: 16px;
    gap: 8px;
`;

export const Footer = styled.View`
    position: absolute;
    z-index: 2;
    bottom: 0;
    width: 100%;
    padding: 16px 16px ${initialWindowMetrics?.insets.bottom}px 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }: ITheme) => theme.colors.background};
    border-top-width: 1px;
    border-top-color: ${({ theme }: ITheme) => theme.colors.disabled};
`;

export const ButtonContainer = styled.View`
    width: 45%;
`;
