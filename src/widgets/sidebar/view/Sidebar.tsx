import { FC } from 'react';
import styles from './Sidebar.module.scss';
import {
  Book,
  BookOpenCheck,
  CalendarCheck,
  Clipboard,
  Component,
  House,
  Sheet,
  UserRound,
} from 'lucide-react';
import { paths } from '@src/shared/constants/constants';
import { CustomButton } from '@src/shared/ui';
import { Link } from 'react-router-dom';
import { useAuth } from '@src/shared/hooks/useAuth';

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

const iconsStudent = [
  {
    icon: <House />,
    label: 'home',
    path: paths.home,
  },
  {
    icon: <Component />,
    label: 'lessons',
    path: paths.lessons,
  },
  {
    icon: <Book />,
    label: 'homeworks',
    path: paths.homeworks,
  },
  {
    icon: <BookOpenCheck />,
    label: 'tests',
    path: paths.tests,
  },
  {
    icon: <CalendarCheck />,
    label: 'schedule',
    path: paths.schedule,
  },
  {
    icon: <Clipboard />,
    label: 'syllabus',
    path: paths.syllabus,
  },
  {
    icon: <Sheet />,
    label: 'timesheet',
    path: paths.timesheet,
  },
  {
    icon: <UserRound />,
    label: 'profile',
    path: paths.profile,
  },
];

export const Sidebar: FC = () => {
  const { user } = useAuth();
  const role = user?.role;
  const iconsToShow = role === 'TEACHER' ? icons : iconsStudent;
  return (
    <div className={styles.sidebar}>
      <div className={styles.icons}>
        {iconsToShow.map((icon) => (
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
