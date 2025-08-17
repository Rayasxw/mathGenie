import styles from './Card.module.scss';
import { FC } from 'react';
import { CardProps } from '../types/types';
import classNames from 'classnames';
import { Typography } from '../../typography/view/Typography';

export const Card: FC<CardProps> = ({
  type,
  title,
  startDate,
  endDate,
  teacher,
  status,
  description = [],
  lessonDate,
  deadline,
  onClick,
}) => {
  return (
    <div className={classNames(styles.card, styles[type])} onClick={onClick}>
      {type === 'homework' && (
        <div
          className={classNames(styles.status, {
            [styles.graded]: status === 'Проверено',
            [styles.error]: status === 'На исправление',
            [styles.submitted]: status === 'Отправлено',
            [styles.overdue]: status === 'Просрочен',
          })}
        >
          <span className={styles.statusText}>{status}</span>
        </div>
      )}
      <div className={styles.content}>
        <Typography variant="h3">{title}</Typography>
        {type === 'month' ? (
          <div className={styles.textM}>
            <Typography variant="bodyText">
              {startDate} - {endDate}
            </Typography>
            <Typography variant="bodyText">{teacher}</Typography>
          </div>
        ) : (
          <div className={styles.textL}>
            <Typography variant="bodyText">
              {Array.isArray(description)
                ? Array(description.slice(0, 3).join(', '))
                : description}
              {description.length > 3 && ' ...'}
            </Typography>
            <div className={styles.text}>
              <Typography variant="bodyText">{lessonDate}</Typography>
              <Typography variant="bodyText">{deadline}</Typography>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
