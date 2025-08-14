import { FC } from 'react';
import styles from './Sidebar.module.scss';
import { Book, BookOpenCheck, Component, House, UserRound } from 'lucide-react';
import { paths } from '@src/shared/constants/constants';
import { CustomButton } from '@src/shared/ui';
import { Link } from 'react-router-dom';

export const icons = [
  {
    icon: <House />,
    label: 'home',
    path: paths.home,
  },
  {
    icon: <Component />,
    label: 'lessons',
    path: paths.teacher.lessons,
  },
  {
    icon: <Book />,
    label: 'homeworks',
    path: paths.teacher.homeworks,
  },
  {
    icon: <BookOpenCheck />,
    label: 'tests',
    path: paths.teacher.tests,
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
          <Link to={icon.path}>
            <CustomButton variant="tertiary" size="sm" className={styles.icon}>
              {icon.icon}
            </CustomButton>
          </Link>
        ))}
      </div>
    </div>
  );
};
