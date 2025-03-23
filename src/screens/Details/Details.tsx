import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useTheme } from "styled-components/native";

import { Button, Text } from "../../components";
import { EButtonType } from "../../infra";
import { NavigationProps } from "../../routes/utils/types";
import { IPhoto } from "../../utils/types";

import * as S from "./DetailsStyles";
export function Details() {
    const params = useRoute().params as { data: IPhoto };
    const theme = useTheme();
    const navigation = useNavigation<NavigationProps>();
    const scrollY = useRef(new Animated.Value(0)).current;

    const imageOpacity = scrollY.interpolate({
        inputRange: [0, 250],
        outputRange: [1, 0],
        extrapolate: "clamp",
    });

    const borderOpacity = scrollY.interpolate({
        inputRange: [100, 250],
        outputRange: [0, 1],
        extrapolate: "clamp",
    });

    const category =
        params?.data?.tags?.[0]?.title ||
        Object.keys(params?.data?.topic_submissions ?? {})[0]?.replace(/-/g, " ") ||
        "Sem categoria";

    const capitalizeFirstLetter = (text?: string) => {
        if (!text) return "Sem categoria";
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    useEffect(() => {
        navigation.setOptions({
            header: () => (
                <S.Header>
                    <S.BackButton onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={24} color={theme.colors.primary} />
                    </S.BackButton>
                    <S.HeaderBorder style={{ opacity: borderOpacity }} />
                </S.Header>
            ),
            headerTitle: "",
        });
    }, [borderOpacity, navigation, theme.colors.primary]);

    return (
        <>
            <S.Container
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                    useNativeDriver: false,
                })}
            >
                <S.ImageContainer>
                    <S.Image
                        source={{
                            uri: params?.data?.urls?.regular,
                        }}
                        contentFit="contain" //rever uma logica dependendo do aspect ratio da imagem para usar cover ou contain
                        style={{ opacity: imageOpacity }}
                    />
                </S.ImageContainer>

                <S.Body>
                    <Text color={theme.colors.primary} fontFamily={theme.fonts.bold} fontSize={24}>
                        {params?.data?.description ??
                            params?.data?.alt_description ??
                            "Sem descrição"}
                    </Text>

                    <Text color={theme.colors.primary} fontFamily={theme.fonts.bold} fontSize={16}>
                        Autor: {params?.data?.user?.name ?? "Sem autor"}
                    </Text>

                    <Text
                        color={theme.colors.secondary}
                        fontFamily={theme.fonts.semiBold}
                        fontSize={16}
                    >
                        Categoria: {capitalizeFirstLetter(category)}
                    </Text>
                </S.Body>
            </S.Container>
            <S.Footer>
                <Text color={theme.colors.primary} fontFamily={theme.fonts.bold} fontSize={20}>
                    R$ 100,00
                </Text>

                <S.ButtonContainer>
                    <Button text="Comprar" type={EButtonType.FILL} />
                </S.ButtonContainer>
            </S.Footer>
        </>
    );
}
