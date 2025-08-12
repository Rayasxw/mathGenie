import { forwardRef } from 'react';
import styles from './CustomInput.module.scss';
import classNames from 'classnames';
import { InputProps } from '../types/types';

export const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'outline',
      fullWidth = true,
      startIcon,
      endIcon,
      isPassword = false,
      label,
      helperText,
      className,
      error = false,
      type = 'text',
      disabled,
      placeholder,
      ...rest
    },
    ref,
  ) => {
    const wrapperClasses = classNames(
      styles.wrapper,
      styles[variant],
      {
        [styles.fullWidth]: fullWidth,
        [styles.disabled]: disabled,
        [styles.error]: !!error,
      },
      className,
    );

    const inputClass = classNames(styles.input, {
      [styles.withStartIcon]: !!startIcon,
      [styles.withEndIcon]: !!endIcon,
    });

    return (
      <div className={wrapperClasses}>
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.inputWrap}>
          {startIcon && <span className={styles.iconStart}>{startIcon}</span>}

          <input
            ref={ref}
            className={inputClass}
            disabled={disabled}
            placeholder={placeholder}
            type={isPassword ? 'password' : type}
            {...rest}
          />

          {endIcon && <span className={styles.iconEnd}>{endIcon}</span>}
        </div>

        {error ? (
          <p className={styles.errorText}>
            {typeof error === 'string' ? error : 'Ошибка'}
          </p>
        ) : (
          helperText && <p className={styles.helperText}>{helperText}</p>
        )}
      </div>
    );
  },
);
