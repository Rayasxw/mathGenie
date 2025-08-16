import { FC } from 'react';
import styles from './Lessons.module.scss';
import { Card, Container, CustomButton, Typography } from '@src/shared/ui';
import { Link } from 'react-router-dom';
import { paths } from '@src/shared/constants/constants';

const lessons = [
  {
    id: 1,
    lesson: 'Урок №1',
    topic: 'Адаптивка',
    date: '14.08.2025',
    deadline: '19:00',
  },
  {
    id: 2,
    lesson: 'Урок №2',
    topic: 'Flexbox и Grid',
    date: '16.08.2025',
    deadline: '18:00',
  },
  {
    id: 3,
    lesson: 'Урок №3',
    topic: 'JavaScript: основы',
    date: '18.08.2025',
    deadline: '20:00',
  },
  {
    id: 4,
    lesson: 'Урок №4',
    topic: 'AJAX и Fetch API',
    date: '20.08.2025',
    deadline: '19:30',
  },
  {
    id: 5,
    lesson: 'Урок №5',
    topic: 'Анимации с GSAP',
    date: '22.08.2025',
    deadline: '21:00',
  },
];

export const Lessons: FC = () => {
  return (
    <section className={styles.lessons}>
      <Container>
        <div className={styles.panel}>
          <Typography className={styles.title} variant="h2">
            Уроки
          </Typography>
          <CustomButton variant="primary">Добавить ещё</CustomButton>
        </div>
        <div className={styles.cards}>
          {lessons.map((lesson) => (
            <Link to={`${paths.teacher.lesson}`}>
              <Card
                title={lesson.lesson}
                description={lesson.topic}
                date={<div></div>}
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
