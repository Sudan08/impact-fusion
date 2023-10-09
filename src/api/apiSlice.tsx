import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
  } from '@reduxjs/toolkit/query/react';
  import { logout, setNewToken } from '../components/auth/authSlice';
  import { RootState } from './store';
  
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://nasa-hackathon.tnbswap.com/',
    prepareHeaders: (headers, { getState }) => {
      const { auth } = getState() as RootState;
      const token = auth.accessToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });
  
  const baseQueryWithReAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    object
  > = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
  
    if (result?.error?.status === 401) {
      await api.dispatch(logout());
      result = await baseQuery(args, api, extraOptions);
    } else if (result?.error?.status === 404) {
      const { auth } = api.getState() as RootState;
      const res = await baseQuery(
        {
          url: '/RegenerateToken',
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        },
        api,
        extraOptions
      );
      const data = res.data as any;
      if (data) {
        api.dispatch(
          setNewToken({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          })
        );
  
        // retrying the request
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    }
    return result;
  };
  
  export const apiSlice = createApi({
    baseQuery: baseQueryWithReAuth,
    reducerPath: 'api',
    tagTypes: ['projects'],
    endpoints: (_builder) => ({}),
  });
