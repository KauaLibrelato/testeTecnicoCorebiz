import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { useForm } from "react-hook-form";
import { Keyboard } from "react-native";
import { useTheme } from "styled-components/native";

import Logo from "../../assets/svgs/logo.svg";
import { Button, ControlledTextInput, ScreenContent } from "../../components";
import { ProductCard } from "../../components/Cards/ProductCard/ProductCard";
import { NavigationProps } from "../../routes/utils/types";

import * as S from "./HomeStyles";
import { useQueries } from "./utils/useQueries";

export function Home() {
    const navigation = useNavigation<NavigationProps>();
    const theme = useTheme();
    const { control, handleSubmit, reset, watch } = useForm();
    const {
        data: photos,
        fetchNextPage,
        isLoading,
        refetch,
        setSearchQuery,
        isFetching,
        searchQuery,
    } = useQueries();

    const onSubmit = handleSubmit(({ search }) => {
        setSearchQuery(search);
    });

    const searchValue = watch("search", "");
    const allPhotos = photos?.pages.flatMap((page) => page.photos) ?? [];
    console.log("SEARCHQUERYHOME: ", searchQuery);
    return (
        <ScreenContent>
            <S.LogoContainer>
                <Logo />
            </S.LogoContainer>
            <S.Header>
                <ControlledTextInput
                    control={control}
                    name="search"
                    placeholder="Search for category or style"
                    onSubmitEditing={() => {
                        onSubmit();
                    }}
                />

                {searchValue.length > 0 && (
                    <S.ClearButton
                        onPress={() => {
                            reset();
                            if (searchQuery) {
                                console.log("RESETANDO");
                                setSearchQuery("");
                                refetch();
                            }
                            Keyboard.dismiss();
                        }}
                    >
                        <AntDesign name="closecircleo" size={24} color={theme.colors.primary} />
                    </S.ClearButton>
                )}
            </S.Header>

            {isLoading && (
                <S.LoadingContainer>
                    <S.LoadingIndicator size="large" color={theme.colors.primary} />
                </S.LoadingContainer>
            )}
            {!isLoading && (
                <FlashList
                    data={allPhotos}
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
