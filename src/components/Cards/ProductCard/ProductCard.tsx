import React from "react";

import * as S from "./ProductCardStyles";

export function ProductCard({ data, onPress }: any) {
    return (
        <S.Container onPress={onPress}>
            <S.Miniature source={{ uri: data?.imageUrl }} contentFit="cover" />
            <S.CategoryBadge>
                <S.CategoryBadgeText>{data?.category}</S.CategoryBadgeText>
            </S.CategoryBadge>

            <S.TextsContainer>
                <S.Title>{data?.title}</S.Title>
                <S.Description>{data?.photographer}</S.Description>
            </S.TextsContainer>
        </S.Container>
    );
}
