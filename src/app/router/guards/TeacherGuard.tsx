import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { useAuthStore } from '@src/widgets/login/store/useAuthStore';

interface TeacherGuardProps {
  children: ReactNode;
}

export const TeacherGuard: FC<TeacherGuardProps> = ({ children }) => {
  const userRole = useAuthStore((state) => state.user.role);

  return (
    <AuthGuard>
      {userRole === 'teacher' ? children : <Navigate to={'/'} replace />}
    </AuthGuard>
  );
};
