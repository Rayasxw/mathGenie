import { ReactNode } from 'react';

export interface FormProps {
  children: ReactNode;
  onSubmit: () => void;
  width?: string;
  className?: string;
}
