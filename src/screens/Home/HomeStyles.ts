import styled from "styled-components/native";

import { ITheme } from "../../theme/utils/types";

export const LogoContainer = styled.View`
    align-items: center;
`;

export const Header = styled.View`
    margin: 16px 0;
    flex-direction: row;
`;

export const ClearButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    align-items: center;
    justify-content: center;
    margin-left: 8px;
`;

export const EmptyList = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const EmptyListText = styled.Text`
    font-size: 16px;
    color: ${({ theme }: ITheme) => theme.colors.primary};
    font-family: ${({ theme }: ITheme) => theme.fonts.bold};
`;

export const LoadingContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const LoadingIndicator = styled.ActivityIndicator``;
