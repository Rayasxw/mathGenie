import { CustomButton, Container, Typography } from '@src/shared/ui';
import { Brain, Calculator, Zap } from 'lucide-react';
import styles from './Hero.module.scss';
import classNames from 'classnames';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const Hero: FC = () => {
  const navigate = useNavigate();
  const list = [
    {
      title: 'Персонализированные',
      description:
        'Тесты адаптируются под ваш уровень знаний по всем предметам.',
      icon: <Calculator className={classNames(styles.listIcon, styles.oneI)} />,
    },
    {
      title: 'Интерактивные',
      description: 'Задавайте вопросы и получайте мгновенные ответы от ИИ.',
      icon: <Brain className={classNames(styles.listIcon, styles.twoI)} />,
    },
    {
      title: 'Адаптивные',
      description: 'Платформа подстраивается под ваш стиль обучения.',
      icon: <Zap className={classNames(styles.listIcon, styles.threeI)} />,
    },
  ];
  return (
    <section className={styles.heroSection}>
      <Container className={styles.heroInner}>
        <div className={styles.iconWrapper}>
          <div className={styles.brainIcon}>
            <Brain className={styles.brainSvg} />
          </div>
          <div className={styles.zapIcon}>
            <Zap className={styles.zapSvg} />
          </div>
        </div>

        <Typography align="center" variant="h1">
          Изучайте науки с{' '}
          <span className={styles.gradientText}>MathGenie</span>
        </Typography>

        <Typography
          align="center"
          variant="bodyText"
          className={styles.description}
        >
          Интерактивная платформа с искусственным интеллектом для эффективного
          обучения на онлайн курсах по всем направлениям.
        </Typography>

        <div className={styles.buttonGroup}>
          <CustomButton
            className={styles.askButton}
            variant="primary"
            size="lg"
            onClick={() => navigate('/subjects')}
          >
            Посмотреть тесты
          </CustomButton>

          <CustomButton
            variant="secondary"
            size="lg"
            className={styles.askButton}
            onClick={() => navigate('/questions')}
          >
            Задать вопрос ИИ
          </CustomButton>
        </div>
        <div className={styles.list}>
          {list.map((item, index) => (
            <div key={index} className={styles.listItem}>
              <div
                className={classNames(
                  styles.listIconWrapper,
                  styles[`item${index + 1}`],
                )}
              >
                {item.icon}
              </div>
              <Typography
                align="center"
                variant="h3"
                weight="semiBold"
                className={styles.listTitle}
              >
                {item.title}
              </Typography>
              <Typography align="center" variant="bodyText">
                {item.description}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
