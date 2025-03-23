import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useTheme } from "styled-components/native";

import { Button, Text } from "../../components";
import { EButtonType } from "../../infra";
import { NavigationProps } from "../../routes/utils/types";
import { capitalizeFirstLetter, imageFit } from "../../utils/functions";
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
        "Without category";

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
                        contentFit={imageFit(params?.data?.width, params?.data?.height)}
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
                        Author: {params?.data?.user?.name ?? "Without author"}
                    </Text>

                    <Text
                        color={theme.colors.secondary}
                        fontFamily={theme.fonts.semiBold}
                        fontSize={16}
                    >
                        Category: {capitalizeFirstLetter(category)}
                    </Text>
                </S.Body>
            </S.Container>
            <S.Footer>
                <Text color={theme.colors.primary} fontFamily={theme.fonts.bold} fontSize={20}>
                    $ 100.00
                </Text>

                <S.ButtonContainer>
                    <Button text="Buy" type={EButtonType.FILL} />
                </S.ButtonContainer>
            </S.Footer>
        </>
    );
}
