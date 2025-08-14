import { ReactNode } from 'react';

export interface CardProps {
  title: string;
  description?: string;
  date: ReactNode;
  className?: string;
  onClick?: () => void;
  teacher?: string;
  status?: 'in-progress' | 'completed' | 'error';
}
