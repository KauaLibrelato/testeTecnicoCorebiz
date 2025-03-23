import React from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { TextInputProps } from "react-native";

import { Input } from "./Input/Input";

export function ControlledTextInput<FormType extends FieldValues>({
    control,
    name,
    rules,
    label,
    ...rest
}: UseControllerProps<FormType> & TextInputProps & { label?: string }) {
    return (
        <Controller
            control={control}
            render={({ field, fieldState }) => (
                <Input
                    {...rest}
                    label={label}
                    name={name}
                    onBlur={field.onBlur}
                    onChangeText={field.onChange}
                    value={field.value}
                    errorMessage={fieldState.error?.message}
                />
            )}
            name={name}
            rules={rules}
        />
    );
}
