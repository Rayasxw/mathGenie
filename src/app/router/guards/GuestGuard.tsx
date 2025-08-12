import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const isAuth = true;

interface GuestGuardProps {
  children: ReactNode;
}

const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  return !isAuth ? children : <Navigate to="/" replace />;
};

export default GuestGuard;
