import { CustomButton } from '@src/shared/ui';
import { useAuthStore } from '@src/widgets/login/store/useAuthStore';
import type { FC } from 'react';

export const Header: FC = () => {
  const { user, logout } = useAuthStore();
  return (
    <div>
      <p>{user?.username}</p>
      <p>{user?.role}</p>
      <CustomButton onClick={logout}>Выйти</CustomButton>
    </div>
  );
};
