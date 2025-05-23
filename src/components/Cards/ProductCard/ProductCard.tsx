import React from "react";
import { useTheme } from "styled-components/native";

import { blurhash } from "../../../utils/constants";
import { capitalizeFirstLetter } from "../../../utils/functions";
import { Text } from "../../Others/Text/Text";

import * as S from "./ProductCardStyles";
import { IProductCard } from "./utils/types";

export function ProductCard({ data, onPress }: IProductCard) {
    const theme = useTheme();

    const category =
        data?.tags?.[0]?.title ||
        Object.keys(data?.topic_submissions ?? {})[0]?.replace(/-/g, " ") ||
        "Without category";

    return (
        <S.Container testID="product-card-container">
            <S.TouchableContainer onPress={onPress} testID="product-card-touchable">
                <S.Miniature
                    testID="product-card-image"
                    source={{ uri: data?.urls?.regular }}
                    contentFit="cover"
                    placeholder={{ blurhash }}
                    alt={data?.alt_description ?? "Without description"}
                />
                <S.CategoryBadge testID="category-badge">
                    <Text
                        fontSize={14}
                        fontFamily={theme.fonts.medium}
                        color={theme.colors.primary}
                    >
                        {capitalizeFirstLetter(category)}
                    </Text>
                </S.CategoryBadge>

                <S.TextsContainer testID="texts-container">
                    <Text fontSize={16} fontFamily={theme.fonts.bold} color={theme.colors.primary}>
                        {data?.description ?? data?.alt_description ?? "Without description"}
                    </Text>
                    <Text
                        fontSize={14}
                        fontFamily={theme.fonts.medium}
                        color={theme.colors.primary}
                    >
                        {data?.user?.name ?? "Unknown user"}
                    </Text>
                </S.TextsContainer>
            </S.TouchableContainer>
        </S.Container>
    );
}
