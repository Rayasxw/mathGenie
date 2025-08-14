import styles from './Container.module.scss';
import { FC } from 'react';
import { ContainerProps } from '../types/types';
import classNames from 'classnames';

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
};
