import React from "react";
import { TouchableOpacityProps } from "react-native";

import { EButtonType } from "../../../infra";

import * as S from "./ButtonStyles";
import { IButtonProps } from "./utils/types";

export function Button({
    text,
    bgColor,
    disabled,
    colorText,
    type,
    ...rest
}: IButtonProps & TouchableOpacityProps) {
    if (type === EButtonType.OUTLINE) {
        return (
            <S.OutlineContainer {...rest} disabled={disabled}>
                <S.Text colorText={bgColor}>{text}</S.Text>
            </S.OutlineContainer>
        );
    }

    return (
        <S.FillContainer {...rest} bgColor={bgColor} disabled={disabled}>
            <S.Text colorText={colorText}>{text}</S.Text>
        </S.FillContainer>
    );
}
