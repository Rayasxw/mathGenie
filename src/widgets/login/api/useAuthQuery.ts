import { $authApi } from '@src/shared/lib/requester';
import { LoginProps, LoginResponse } from '../types/types';

export async function authRequest(data: LoginProps) {
  const res = await $authApi.post<LoginResponse>('auth/login', data);
  return res.data;
}
