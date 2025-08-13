import { FC } from 'react';
import styles from './Form.module.scss';
import { FormProps } from '../types/types';

export const Form: FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      {children}
    </form>
  );
};
