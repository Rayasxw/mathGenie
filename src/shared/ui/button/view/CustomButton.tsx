import styles from 'CustomButton.module.scss';
import { FC } from 'react';
import { ButtonProps } from '../types/types';

export const CustomButton: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  fullWidth = false,
  ...rest
}) => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    className,
    fullWidth && styles.fullWidth,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
