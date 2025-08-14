import { type ReactNode } from 'react';

export type ITVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'bodyText' | 'smallText';

export type ITColors =
  | 'black'
  | 'white'
  | 'gradient'
  | 'grey'
  | 'primary'
  | 'secondary';

export type ITWeights = 'regular' | 'medium' | 'semiBold' | 'bold';
export type ITAlign = 'center' | 'left ' | 'right';
export type ITTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'none';

export interface ITTypography {
  variant: ITVariants;
  color?: ITColors;
  weight?: ITWeights;
  align?: ITAlign;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  truncate?: number;
  style?: React.CSSProperties;
  transform?: ITTransform;
}
