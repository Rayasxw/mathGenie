import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';

interface StudentGuardProps {
  children: ReactNode;
}

const type = 'student';

export const StudentGuard: FC<StudentGuardProps> = ({ children }) => {
  return (
    <AuthGuard>
      {type === 'student' ? children : <Navigate to={'/'} replace />}
    </AuthGuard>
  );
};
