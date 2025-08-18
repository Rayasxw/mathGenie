import { create } from 'zustand';
import { BASE_URL, tokens } from '../constants/constants';
import axios from 'axios';

interface loginRes {
  access: string;
  refresh: string;
  user: {
    id: string;
    username: string;
    role: string;
  };
}
interface userData {
  id: string;
  username: string;
  role: string;
}
interface AuthState {
  isAuth: boolean;
  user: userData | null;
  login: (response: { data: loginRes }) => void;
  logout: () => void;
  checkAuth: (refresh: string) => Promise<loginRes>;
}

export const useAuth = create<AuthState>((set) => {
  let user: userData | null = null;
  try {
    const userStr = localStorage.getItem('user');
    if (userStr) user = JSON.parse(userStr);
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
  }

  return {
    isAuth: !!localStorage.getItem(tokens.access),
    user,
    login: async (response: { data: loginRes }) => {
      const { access, refresh, user } = response.data;
      localStorage.setItem(tokens.access, access);
      localStorage.setItem(tokens.refresh, refresh);
      localStorage.setItem('user', JSON.stringify(user));
      set({ isAuth: true, user });
    },
    logout: () => {
      localStorage.removeItem(tokens.access);
      localStorage.removeItem(tokens.refresh);
      localStorage.removeItem('user');
      set({ isAuth: false, user: null });
    },
    checkAuth: async (refresh: string): Promise<loginRes> => {
      try {
        const { data } = await axios.post<loginRes>(
          `${BASE_URL}/auth/refresh/`,
          {
            refresh: refresh,
          },
        );
        localStorage.setItem(tokens.access, data.access);
        if (data.refresh) {
          localStorage.setItem(tokens.refresh, data.refresh);
        }
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
          set({ isAuth: true, user: data.user });
        } else {
          set({ isAuth: true });
        }
        return data;
      } catch (error) {
        console.error('Error refreshing token:', error);
        throw new Error('Failed to refresh token');
      }
    },
  };
});
