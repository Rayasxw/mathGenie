import { FC } from 'react';
import styles from './Sidebar.module.scss';
import { Component, House, UserRound } from 'lucide-react';
import { paths } from '@src/shared/constants/constants';
import { CustomButton } from '@src/shared/ui';

export const icons = [
  {
    icon: <House />,
    label: 'home',
    path: paths.home,
  },
  {
    icon: <Component />,
    label: 'groups',
    path: paths.teacher.groups,
  },
  {
    icon: <UserRound />,
    label: 'profile',
    path: paths.profile,
  },
];

export const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.icons}>
        {icons.map((icon) => (
          <CustomButton variant="tertiary" size="sm" className={styles.icon}>
            {icon.icon}
          </CustomButton>
        ))}
      </div>
    </div>
  );
};
