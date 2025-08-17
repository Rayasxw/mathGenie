import { useAuth } from '@src/shared/hooks/useAuth';
import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const isAuth = useAuth((state) => state.isAuth);

  return isAuth ? children : <Navigate to={'/login'} replace />;
};
