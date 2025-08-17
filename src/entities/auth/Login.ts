import { useMutation } from '@tanstack/react-query';
import { useAuth } from './../../shared/hooks/useAuth';
import { $mainApi } from '@src/shared/lib/requester';
import { AxiosError } from 'axios';
interface LoginForm {
  username: string;
  password: string;
}
interface LoginResponse {
  access: string;
  refresh: string;
  user: {
    id: string;
    username: string;
    role: string;
  };
}
interface LoginError {
  message: string;
}

type RedirectFn = () => void;

export const useLogin = (redirect: RedirectFn) => {
  const { login } = useAuth();
  return useMutation<LoginResponse, AxiosError<LoginError>, LoginForm>({
    mutationKey: ['login'],
    mutationFn: async (data) => {
      const response = await $mainApi.post<LoginResponse>('auth/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    },
    onSuccess: (response) => {
      login({ data: response });
      redirect();
    },
  });
};
