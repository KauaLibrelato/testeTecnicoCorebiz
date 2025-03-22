import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { Animated } from "react-native";
import { useTheme } from "styled-components/native";

import { Text } from "../../components";
import { NavigationProps } from "../../routes/utils/types";

import * as S from "./DetailsStyles";
export function Details() {
    const theme = useTheme();
    const navigation = useNavigation<NavigationProps>();

    const scrollY = useRef(new Animated.Value(0)).current;

    const imageOpacity = scrollY.interpolate({
        inputRange: [0, 250],
        outputRange: [1, 0],
        extrapolate: "clamp",
    });

    return (
        <>
            <S.BackButton onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={24} color={theme.colors.primary} />
            </S.BackButton>
            <S.Container
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                    useNativeDriver: false,
                })}
            >
                <S.Header>
                    <S.ImageContainer>
                        <S.Image
                            source={{
                                uri: "https://wallpapers.com/images/hd/bright-blue-full-moon-3aezu4sm39ywd0ua.jpg",
                            }}
                            contentFit="cover"
                            style={{ opacity: imageOpacity }}
                        />
                    </S.ImageContainer>
                </S.Header>

                <S.Body>
                    <Text color={theme.colors.primary} fontFamily={theme.fonts.bold} fontSize={24}>
                        Paisagem Natural
                    </Text>
                    <Text
                        color={theme.colors.primary}
                        fontFamily={theme.fonts.regular}
                        fontSize={18}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui esse
                        molestias? Facilis dolorum error itaque! Sint est labore facilis molestias
                        quia necessitatibus! Necessitatibus, repellat tenetur sequi doloremque ex
                        accusantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                        qui esse molestias? Facilis dolorum error itaque! Sint est labore facilis
                        molestias quia necessitatibus! Necessitatibus, repellat tenetur sequi
                        doloremque ex accusantium.Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Nobis qui esse molestias? Facilis dolorum error itaque! Sint est
                        labore facilis molestias quia necessitatibus! Necessitatibus, repellat
                        tenetur sequi doloremque ex accusantium.Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Nobis qui esse molestias? Facilis dolorum
                        error itaque! Sint est labore facilis molestias quia necessitatibus!
                        Necessitatibus, repellat tenetur sequi doloremque ex accusantium.Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Nobis qui esse molestias?
                        Facilis dolorum error itaque! Sint est labore facilis molestias quia
                        necessitatibus! Necessitatibus, repellat tenetur sequi doloremque ex
                        accusantium.
                    </Text>
                    <Text
                        color={theme.colors.primary}
                        fontFamily={theme.fonts.semiBold}
                        fontSize={16}
                    >
                        Fotografia Criativa
                    </Text>
                    <Text color={theme.colors.primary} fontFamily={theme.fonts.bold} fontSize={16}>
                        John Doe
                    </Text>
                </S.Body>
            </S.Container>
            <S.Footer>
                <Text color={theme.colors.primary} fontFamily={theme.fonts.bold} fontSize={20}>
                    R$ 100,00
                </Text>

                {/* <Button title="Comprar" /> */}
            </S.Footer>
        </>
    );
}
