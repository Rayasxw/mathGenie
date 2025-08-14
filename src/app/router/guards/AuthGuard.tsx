import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@src/widgets/login/store/useAuthStore';

interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const isAuth = !!accessToken;

  return isAuth ? children : <Navigate to={'/login'} replace />;
};
