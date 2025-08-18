import { MonthStudent } from '@src/widgets/monthStudent/view/MonthStudent';
import type { FC } from 'react';

export const SchedulePage: FC = () => {
  return (
    <div>
      <h1>Расписание</h1>
      <p>Расписание занятий</p>
      <MonthStudent />
    </div>
  );
};
