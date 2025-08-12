import { createBrowserRouter } from 'react-router-dom';
import { paths } from '../../shared/constants/constants';
import { Layout } from '../layout/Layout';
import { teacherRouter } from './TeacherRouter';
import { studentRouter } from './StudentRouter';
import { authRouter } from './AuthRouter';
import { mainRouter } from './MainRouter';

export const router = createBrowserRouter([
  {
    path: paths.home,
    element: <Layout />,
    children: [...teacherRouter, ...studentRouter, ...mainRouter],
  },
  ...authRouter,
]);
