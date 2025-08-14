import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@src/widgets/login/store/useAuthStore';

interface GuestGuardProps {
  children: ReactNode;
}

const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const isAuth = !!accessToken;

  return !isAuth ? children : <Navigate to="/" replace />;
};

export default GuestGuard;
