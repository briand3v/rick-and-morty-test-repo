import { createApi } from '@reduxjs/toolkit/query/react';
import { setUser } from '../features/userSlice';
import customFetchBase from './customFetchBase';
import { IUser } from './types';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: customFetchBase,
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getMe: builder.query<IUser, null>({
            query() {
                return {
                    url: 'v1/user/me',
                    credentials: 'include',
                };
            },
            transformResponse: (result: any) => {
                return result
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setUser(data));
                } catch (error) { }
            },
        }),
    }),
});