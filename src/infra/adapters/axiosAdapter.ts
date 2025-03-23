import { AxiosError, AxiosResponse } from "axios";

import { api } from "../../services/api";

export const axiosAdapter = async <T>({ method, url, data, query }: IAxiosAdapter) => {
    let axiosResponse: AxiosResponse<T> | undefined;

    try {
        axiosResponse = await api.request({
            url: query ? `${url}?${new URLSearchParams(query)}` : url,
            method,
            data,
        });
    } catch (error) {
        axiosResponse = undefined;
        const err = error as AxiosError<{ message: string }>;
        throw err;
    }

    return { response: axiosResponse?.data };
};
