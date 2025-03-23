import React from "react";

import * as S from "./TextStyles";
import { ITextProps } from "./utils/types";

export function Text({ children, ...rest }: ITextProps) {
    return <S.Text {...rest}>{children}</S.Text>;
}
