import { createApi } from '@reduxjs/toolkit/query/react';
import { LoginInput, RegisterInput } from '../../constants/form-structure';
import customFetchBase from './customFetchBase';
import { IGenericResponse } from './types';
import { userApi } from './userApi';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: customFetchBase,
    endpoints: (builder) => ({
        registerUser: builder.mutation<IGenericResponse, RegisterInput>({
            query(data) {
                return {
                    url: 'v1/auth/signup',
                    method: 'POST',
                    body: data,
                };
            },
            transformResponse: (response: { data: any }, meta, arg) => {
                return response.data
            },
        }),
        loginUser: builder.mutation<
            { access_token: string; status: string },
            LoginInput
        >({
            query(data) {
                return {
                    url: 'v1/auth/login',
                    method: 'POST',
                    body: data,
                    credentials: 'include',
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    await dispatch(userApi.endpoints.getMe.initiate(null));
                } catch (error) { }
            },
        }),
        verifyEmail: builder.mutation<
            IGenericResponse,
            { verificationCode: string }
        >({
            query({ verificationCode }) {
                return {
                    url: `verifyemail/${verificationCode}`,
                    method: 'GET',
                };
            },
        }),
        logoutUser: builder.mutation<void, void>({
            query() {
                return {
                    url: 'v1/auth/logout',
                    credentials: 'include',
                };
            },
        }),
    }),
});

export const {
    useLoginUserMutation,
    useRegisterUserMutation,
    useLogoutUserMutation,
    useVerifyEmailMutation,
} = authApi;