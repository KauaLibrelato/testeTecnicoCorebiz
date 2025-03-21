import React, { useEffect } from "react";

import { api } from "../../services/api";
import * as S from "./Screen1Styles";

export function Screen1() {
    async function teste() {
        try {
            await api.get("/search/photos?page=1&query=office").then((response) => {
                // console.log(response.data?.results);
            });
        } catch (error) {
            console.log("Error:", error);
        }
    }

    useEffect(() => {
        teste();
    }, []);
    return (
        <S.Container>
            <S.Title>Screen1</S.Title>
        </S.Container>
    );
}
