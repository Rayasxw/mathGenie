import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'outline' | 'filled';
  fullWidth?: boolean;
  error?: boolean | string;
  type?: 'text' | 'radio' | 'password';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isPassword?: boolean;
  label?: string;
  helperText?: string;
  className?: string;
}
