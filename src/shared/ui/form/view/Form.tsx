import { FC } from 'react';
import styles from './Form.module.scss';
import { FormProps } from '../types/types';
import classNames from 'classnames';

export const Form: FC<FormProps> = ({
  children,
  onSubmit,
  width = '100%',
  className,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className={classNames(styles.form, className)}
      style={{ width: width }}
    >
      {children}
    </form>
  );
};
