import { HomePage, ProfilePage } from '@src/pages';
import { AuthGuard } from './guards/AuthGuard';
import { paths } from '@src/shared/constants/constants';

export const mainRouter = [
  {
    path: paths.profile,
    element: (
      <AuthGuard>
        <ProfilePage />,
      </AuthGuard>
    ),
  },
  {
    path: paths.home,
    element: (
      <AuthGuard>
        <HomePage />,
      </AuthGuard>
    ),
  },
];
