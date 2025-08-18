import { FC } from 'react';
import { useLessonQuery } from '../api/lessonQuery';
import { Card, Container, CustomButton, Typography } from '@src/shared/ui';
import styles from './LessonStudent.module.scss';
import { Link } from 'react-router-dom';
import { paths } from '@src/shared/constants/constants';

export const LessonStudent: FC = () => {
  const { data } = useLessonQuery();
  const lessons = Array.isArray(data?.data) ? data.data : [];

  return (
    <section className={styles.homeworks}>
      <Container>
        <div className={styles.panel}>
          <Typography variant="h2">Домашние задания </Typography>
          <CustomButton>Фильтр</CustomButton>
        </div>
        <div className={styles.cards}>
          {lessons.map((less: any) => (
            <Link to={`${paths.lessons}/${less.id}`}>
              <Card
                type="lesson"
                title={less.title}
                description={less.description}
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
