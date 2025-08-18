import { Card, Container } from '@src/shared/ui';
import { FC } from 'react';
import { useGroupQuery } from '../api/useGroup';
import { Link } from 'react-router-dom';
import { paths } from '@src/shared/constants/constants';

export const MonthStudent: FC = () => {
  const { data } = useGroupQuery();
  const month = data?.data;
  return (
    <section>
      <Container>
        <Link to={paths.lessons}>
          <Card
            type="month"
            title={month?.name}
            teacher={`Учитель: ${month?.teacher?.username}`}
            startDate={`С ${new Date(month?.startDate).toLocaleDateString()} по ${new Date(month?.endDate).toLocaleDateString()}`}
          />
        </Link>
      </Container>
    </section>
  );
};
