import { Suspense, type FC } from 'react';
import { Footer } from '../../widgets/footer';
import { Header } from '../../widgets/header';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@src/widgets/sidebar';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};
