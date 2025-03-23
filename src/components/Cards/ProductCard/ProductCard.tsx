import React from "react";
import { useTheme } from "styled-components/native";

import { Text } from "../../Others/Text/Text";

import * as S from "./ProductCardStyles";
import { IProductCard } from "./utils/types";

export function ProductCard({ data, onPress }: IProductCard) {
    const theme = useTheme();

    const category =
        data?.tags?.[0]?.title ||
        Object.keys(data?.topic_submissions ?? {})[0]?.replace(/-/g, " ") ||
        "Sem categoria";

    const capitalizeFirstLetter = (text?: string) => {
        if (!text) return "Sem categoria";
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    return (
        <S.Container>
            <S.TouchableContainer onPress={onPress}>
                <S.Miniature source={{ uri: data?.urls?.regular }} contentFit="cover" />
                <S.CategoryBadge>
                    <Text
                        fontSize={14}
                        fontFamily={theme.fonts.medium}
                        color={theme.colors.primary}
                    >
                        {capitalizeFirstLetter(category)}
                    </Text>
                </S.CategoryBadge>

                <S.TextsContainer>
                    <Text fontSize={16} fontFamily={theme.fonts.bold} color={theme.colors.primary}>
                        {data?.description ?? data?.alt_description ?? "Sem descrição"}
                    </Text>
                    <Text
                        fontSize={14}
                        fontFamily={theme.fonts.medium}
                        color={theme.colors.primary}
                    >
                        {data?.user?.name ?? "Usuário desconhecido"}
                    </Text>
                </S.TextsContainer>
            </S.TouchableContainer>
        </S.Container>
    );
}
