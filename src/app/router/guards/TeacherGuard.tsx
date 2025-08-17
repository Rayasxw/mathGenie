import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { useAuth } from '@src/shared/hooks/useAuth';

interface TeacherGuardProps {
  children: ReactNode;
}

export const TeacherGuard: FC<TeacherGuardProps> = ({ children }) => {
  const userRole = useAuth((state) => state?.user?.role);

  return (
    <AuthGuard>
      {userRole === 'TEACHER' ? children : <Navigate to={'/'} replace />}
    </AuthGuard>
  );
};
