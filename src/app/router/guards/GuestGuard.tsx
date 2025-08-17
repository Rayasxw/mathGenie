import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@src/shared/hooks/useAuth';

interface GuestGuardProps {
  children: ReactNode;
}

const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  const isAuth = useAuth((state) => state.isAuth);

  return !isAuth ? children : <Navigate to="/" replace />;
};

export default GuestGuard;
