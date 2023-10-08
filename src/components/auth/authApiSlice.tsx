import { apiSlice } from '../../api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/jwt/create/',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    googleLogin: builder.query({
        query: (url) => ({
            url: `/auth/o/google-oauth2/?redirect_uri=${url}`,
            method: 'GET',
        }),
        }),
  }),
});

export const { useLoginMutation , useGoogleLoginQuery } = authApiSlice;
