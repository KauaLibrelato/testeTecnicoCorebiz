import { Image as ExpoImage } from "expo-image";
import { Animated } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { ITheme } from "../../theme/utils/types";

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
`;

export const Header = styled(Animated.View)`
    padding: 8px 0px;
`;

export const BackButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    background-color: ${({ theme }: ITheme) => theme.colors.background};
    margin-top: ${initialWindowMetrics?.insets.top}px;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    justify-content: center;
    align-items: center;
`;

export const HeaderBorder = styled(Animated.View)`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme }: ITheme) => theme.colors.disabled};
`;

export const ImageContainer = styled.View``;

export const Image = styled(Animated.createAnimatedComponent(ExpoImage))`
    width: 100%;
    height: 350px;
`;

export const Body = styled.View`
    padding: 16px;
    gap: 8px;
    padding-bottom: 120px;
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
