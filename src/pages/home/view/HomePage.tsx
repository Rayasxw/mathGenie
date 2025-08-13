import { Card } from '@src/shared/ui';
import type { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <p>Добро пожаловать в математическое приложение!</p>
      <Card title="Математическая карточка" date="" />
    </div>
  );
};
