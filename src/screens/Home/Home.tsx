import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components/native";

import Logo from "../../assets/svgs/logo.svg";
import { Button, ControlledTextInput, ScreenContent } from "../../components";
import { ProductCard } from "../../components/Cards/ProductCard/ProductCard";
import { NavigationProps } from "../../routes/utils/types";
import { usePhotosStore } from "../../store/store";

import * as S from "./HomeStyles";
import { useQueries } from "./utils/useQueries";

export function Home() {
    const navigation = useNavigation<NavigationProps>();
    const theme = useTheme();
    const { control, handleSubmit, reset } = useForm();
    const { photos } = usePhotosStore((state) => state);
    const { fetchNextPage, isLoading, refetch, setSearchQuery, isFetching } = useQueries();

    const onSubmit = handleSubmit(({ searchQuery }) => {
        setSearchQuery(searchQuery);
        refetch();
    });

    return (
        <ScreenContent>
            <S.LogoContainer>
                <Logo />
            </S.LogoContainer>
            <S.Header>
                <ControlledTextInput
                    control={control}
                    name="searchQuery"
                    placeholder="Buscar categoria ou estilo"
                    onSubmitEditing={() => {
                        onSubmit();
                    }}
                />

                <S.ClearButton
                    onPress={() => {
                        reset();
                        setSearchQuery("");
                        refetch();
                    }}
                >
                    <AntDesign name="closecircleo" size={24} color={theme.colors.primary} />
                </S.ClearButton>
            </S.Header>

            {isLoading && (
                <S.LoadingContainer>
                    <S.LoadingIndicator size="large" color={theme.colors.primary} />
                </S.LoadingContainer>
            )}
            {!isLoading && (
                <FlashList
                    data={photos}
                    renderItem={({ item: image }) => (
                        <ProductCard
                            data={image}
                            onPress={() => navigation.navigate("Details", { data: image })}
                        />
                    )}
                    onEndReached={() => fetchNextPage()}
                    onEndReachedThreshold={0.3}
                    estimatedItemSize={200}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={() =>
                        isFetching ? (
                            <S.LoadingContainer>
                                <S.LoadingIndicator size="large" color={theme.colors.primary} />
                            </S.LoadingContainer>
                        ) : null
                    }
                    ListEmptyComponent={() =>
                        !isLoading &&
                        !isFetching && (
                            <S.EmptyList>
                                <AntDesign name="frowno" size={32} color={theme.colors.primary} />
                                <S.EmptyListText>Nenhum resultado encontrado</S.EmptyListText>
                                <Button
                                    onPress={() => refetch()}
                                    text="Tentar novamente"
                                    type={undefined}
                                />
                            </S.EmptyList>
                        )
                    }
                />
            )}
        </ScreenContent>
    );
}
