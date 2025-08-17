import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { useAuth } from '@src/shared/hooks/useAuth';

interface StudentGuardProps {
  children: ReactNode;
}

export const StudentGuard: FC<StudentGuardProps> = ({ children }) => {
  const userRole = useAuth((state) => state?.user?.role);

  return (
    <AuthGuard>
      {userRole === 'STUDENT' ? children : <Navigate to={'/'} replace />}
    </AuthGuard>
  );
};
