import styles from './CustomButton.module.scss';
import { FC } from 'react';
import { ButtonProps } from '../types/types';
import { Typography } from '../../typography/view/Typography';

export const CustomButton: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  rounded = false,
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
    rounded && styles.rounded,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <button className={classes} {...rest}>
      <Typography variant="bodyText">{children}</Typography>
    </button>
  );
};
