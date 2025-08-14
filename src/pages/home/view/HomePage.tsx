import { Hero } from '@src/widgets/hero';
import { Interactive } from '@src/widgets/interactive';
import type { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Interactive />
    </>
  );
};
