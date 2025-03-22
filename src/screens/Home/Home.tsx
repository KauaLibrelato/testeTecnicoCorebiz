import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { useForm } from "react-hook-form";

import Logo from "../../assets/svgs/logo.svg";
import { ControlledTextInput, ScreenContent } from "../../components";
import { ProductCard } from "../../components/Cards/ProductCard/ProductCard";
import { NavigationProps } from "../../routes/utils/types";

import * as S from "./HomeStyles";
export function Home() {
    const navigation = useNavigation<NavigationProps>();
    const { control, handleSubmit } = useForm();
    const teste = [
        {
            id: "1",
            imageUrl: "https://wallpapers.com/images/hd/bright-blue-full-moon-3aezu4sm39ywd0ua.jpg",
            title: "Paisagem Natural",
            photographer: "John Doe",
            category: "Fotografia Criativa",
        },
        {
            id: "2",
            imageUrl: "https://wallpapers.com/images/hd/bright-blue-full-moon-3aezu4sm39ywd0ua.jpg",
            title: "Cidade Moderna",
            photographer: "Jane Smith",
            category: "Arquitetura",
        },
        {
            id: "3",
            imageUrl: "https://wallpapers.com/images/hd/bright-blue-full-moon-3aezu4sm39ywd0ua.jpg",
            title: "Paisagem Natural",
            photographer: "John Doe",
            category: "Fotografia Criativa",
        },
        {
            id: "4",
            imageUrl: "https://wallpapers.com/images/hd/bright-blue-full-moon-3aezu4sm39ywd0ua.jpg",
            title: "Cidade Moderna",
            photographer: "Jane Smith",
            category: "Arquitetura",
        },
    ];

    return (
        <ScreenContent>
            <S.LogoContainer>
                <Logo />
            </S.LogoContainer>
            <S.Header>
                <ControlledTextInput
                    control={control}
                    name="searchQuery"
                    placeholder="Buscar por categoria ou estilo de imagem"
                    onSubmitEditing={handleSubmit((data) => console.log(data))}
                />
            </S.Header>
            <FlashList
                data={teste}
                renderItem={({ item }) => (
                    <ProductCard data={item} onPress={() => navigation.navigate("Details")} />
                )}
                onEndReached={() => console.log("end reached")}
                onEndReachedThreshold={0.3}
                estimatedItemSize={200}
                showsVerticalScrollIndicator={false}
            />
        </ScreenContent>
    );
}
