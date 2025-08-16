import type { FC } from 'react';
import styles from './Header.module.scss';
import { Typography } from '@src/shared/ui';
import { useAuthStore } from '@src/widgets/login/store/useAuthStore';

export const Header: FC = () => {
  const { user, logout } = useAuthStore();
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <div className={styles.groups}>
        <Typography variant="h4" weight="medium">
          Geeks 44-1F30092024
        </Typography>
        <div className={styles.arrow}></div>
      </div>
      <div className={styles.profile}>
        <div className={styles.notifications}></div>
        <div className={styles.avatar}>
          <div className={styles.img}></div>
          <Typography variant="bodyText">{user?.username}</Typography>
          <button onClick={logout}>Выйти</button>
        </div>
      </div>
    </header>
  );
};
