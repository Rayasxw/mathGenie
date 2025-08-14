export interface LoginProps {
  username: string;
  password: string;
}
export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: {
    id: string | null;
    username: string | null;
    role: string | null;
  };

  login: (payload: { username: string; password: string }) => Promise<void>;
  logout: () => void;
  setAccessToken: (token: string) => void;
}

export interface LoginResponse {
  access: string;
  refresh: string;
  user: {
    id: string;
    username: string;
    role: string;
  };
}
