import { tokens } from '@src/shared/constants/constants';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState } from '../types/types';
import { authRequest } from '../api/useAuthQuery';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      user: { id: null, username: null, role: null },

      async login({ username, password }) {
        const data = await authRequest({ username, password });

        localStorage.setItem(tokens.access, data.access);
        if (data.refresh) {
          localStorage.setItem(tokens.refresh, data.refresh);
        }

        set({
          accessToken: data.access,
          refreshToken: data.refresh ?? null,
          user: {
            id: data.user?.id ?? null,
            username: data.user?.username ?? null,
            role: data.user?.role ?? null,
          },
        });
      },

      logout() {
        localStorage.removeItem(tokens.access);
        localStorage.removeItem(tokens.refresh);
        set({
          accessToken: null,
          refreshToken: null,
          user: { id: null, username: null, role: null },
        });
      },

      setAccessToken: (token: string) => {
        localStorage.setItem(tokens.access, token);
        set({ accessToken: token });
      },
    }),
    { name: 'auth-storage' },
  ),
);
