import * as Pages from '@src/pages/index';
import GuestGuard from './guards/GuestGuard';

export const authRouter = [
  {
    path: '/login',
    element: (
      <GuestGuard>
        <Pages.LoginPage />
      </GuestGuard>
    ),
  },
];
