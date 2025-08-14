import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { useAuthStore } from '@src/widgets/login/store/useAuthStore';

interface StudentGuardProps {
  children: ReactNode;
}

export const StudentGuard: FC<StudentGuardProps> = ({ children }) => {
  const userRole = useAuthStore((state) => state.user.role);

  return (
    <AuthGuard>
      {userRole === 'student' ? children : <Navigate to={'/'} replace />}
    </AuthGuard>
  );
};
