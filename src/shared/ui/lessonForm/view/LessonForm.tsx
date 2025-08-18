import { FC } from 'react';
import { Typography } from '@src/shared/ui';
import styles from './LessonForm.module.scss';
import { LessonProps } from '../types/types';

export const LessonForm: FC<LessonProps> = ({
  title,
  description,
  videoUrl,
  materials,
}) => {
  return (
    <div className={styles.lesson}>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="bodyText">{description}</Typography>
      <iframe src={videoUrl}></iframe>
      <Typography variant="bodyText">{materials}</Typography>
    </div>
  );
};
