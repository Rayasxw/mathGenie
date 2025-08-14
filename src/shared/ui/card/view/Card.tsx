import styles from './Card.module.scss';
import { FC } from 'react';
import { CardProps } from '../types/types';
import classNames from 'classnames';

export const Card: FC<CardProps> = ({
  title,
  description,
  className,
  date,
  onClick,
  teacher,
  status = 'in-progress',
}) => {
  return (
    <div className={classNames(styles.card, className)} onClick={onClick}>
      <div className={styles.status}>{status}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.date}>{date}</div>
        <p className={styles.teacher}>{teacher}</p>
      </div>
    </div>
  );
};
