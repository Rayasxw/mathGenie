import type { FC } from 'react';
import { CustomButton, Container, Typography } from '@src/shared/ui';
import styles from './Interactive.module.scss';
import { useNavigate } from 'react-router-dom';

export const Interactive: FC = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.interactiveSection}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.left}>
            <Typography variant="h2">
              Начните изучение наук прямо сейчас
            </Typography>
            <Typography variant="bodyText" className={styles.description}>
              Выберите предмет, получите персонализированные задания и
              развивайтесь вместе с ИИ-помощником.
            </Typography>
            <div className={styles.buttonGroup}>
              <CustomButton
                variant="primary"
                size="lg"
                onClick={() => navigate('/test')}
              >
                Проверить знания
              </CustomButton>
              <CustomButton
                variant="secondary"
                onClick={() => navigate('/questions')}
              >
                Задать вопрос ИИ
              </CustomButton>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.iconBook}>📚</div>
            <Typography
              align="center"
              variant="h3"
              className={styles.bookTitle}
            >
              Интерактивное обучение
            </Typography>
            <Typography align="center" variant="bodyText">
              Изучайте различные науки в интерактивном формате с мгновенной
              обратной связью
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};
