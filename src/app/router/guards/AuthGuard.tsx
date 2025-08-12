import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthGuardProps {
  children: ReactNode;
}

const isAuth = true;

export const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  return isAuth ? children : <Navigate to={'/login'} replace />;
};
