import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../api/store';
import CookieProvider from '../../helpers/CookieHelper';

type IAuthState = {
    refreshToken: string | null;
    accessToken: string | null;
    username ?: string | null;
};

const initialState: IAuthState = {
  refreshToken: CookieProvider.getCookie('Refresh') || null,
  accessToken: CookieProvider.getCookie('Access') || null,

};

const authSlice = createSlice({
  name: 'auth',
  initialState: { ...initialState },
  reducers: {
    setInitialCredentials: (
      state: IAuthState,
      action: PayloadAction<{
        refreshToken: string;
        accessToken: string;
        username ?: string;
      }>
    ) => {
      document.cookie = `Refresh=${action.payload.refreshToken}`;
      document.cookie = `Access=${action.payload.accessToken}`;
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken;
      state.username = action.payload.username;
    },

    setNewToken: (
      state: IAuthState,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      document.cookie = `Refresh=${action.payload.refreshToken}`;
      document.cookie = `Access=${action.payload.accessToken}`;
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken;
    },

    logout: (state: IAuthState, _: PayloadAction) => {
      document.cookie = `Refresh=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `Access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      state.accessToken = null;
      state.refreshToken = null;
      state.username = null;
    },
  },
});
export const { setInitialCredentials, logout, setNewToken } = authSlice.actions;
export default authSlice.reducer;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;
