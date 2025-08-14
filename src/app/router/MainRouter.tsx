import { HomePage, ProfilePage } from '@src/pages';
import { AuthGuard } from './guards/AuthGuard';
import { paths } from '@src/shared/constants/constants';

export const mainRouter = [
  {
    index: true, // Делает HomePage страницей по умолчанию для "/"
    element: (
      <AuthGuard>
        <HomePage />
      </AuthGuard>
    ),
  },
  {
    path: paths.profile,
    element: (
      <AuthGuard>
        <ProfilePage />
      </AuthGuard>
    ),
  },
];
