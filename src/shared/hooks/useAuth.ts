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

export const useAuth = create<AuthState>((set) => ({
  isAuth: !!localStorage.getItem(tokens.access),
  user: null,
  login: async (response: { data: loginRes }) => {
    const { access, refresh } = response.data;
    localStorage.setItem(tokens.access, access);
    localStorage.setItem(tokens.refresh, refresh);
    set({ isAuth: true, user: response.data.user });
  },
  logout: () => {
    localStorage.removeItem(tokens.access);
    localStorage.removeItem(tokens.refresh);
    set({ isAuth: false, user: null });
  },
  checkAuth: async (refresh: string): Promise<loginRes> => {
    try {
      const { data } = await axios.post<loginRes>(`${BASE_URL}/auth/refresh/`, {
        refresh: refresh,
      });
      localStorage.setItem(tokens.access, data.access);
      if (data.refresh) {
        localStorage.setItem(tokens.refresh, data.refresh);
      }
      set({ isAuth: true });
      return data;
    } catch (error) {
      console.error('Error refreshing token:', error);
      throw new Error('Failed to refresh token');
    }
  },
}));
