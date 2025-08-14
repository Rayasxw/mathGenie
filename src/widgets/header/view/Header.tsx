import type { FC } from 'react';
import styles from './Header.module.scss';
import { Typography } from '@src/shared/ui';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <div className={styles.groups}>
        <Typography variant="bodyText">Geeks 44-1F30092024</Typography>
      </div>
      <div className={styles.profile}>
        <div className={styles.notifications}></div>
        <div className={styles.avatar}>
          <div className={styles.img}></div>
          <Typography variant="bodyText">Ишенбек Айназик</Typography>
          <button>dd</button>
        </div>
      </div>
    </header>
  );
};
