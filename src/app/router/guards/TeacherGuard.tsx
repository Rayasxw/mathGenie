import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';

interface TeacherGuardProps {
  children: ReactNode;
}

const type = 'student';

export const TeacherGuard: FC<TeacherGuardProps> = ({ children }) => {
  return (
    <AuthGuard>
      {type === 'student' ? children : <Navigate to={'/'} replace />}
    </AuthGuard>
  );
};
