import styles from './Typography.module.scss';
import { type FC, type ReactNode, type JSX } from 'react';
import classNames from 'classnames';
import type { ITTypography, ITVariants } from '../types/types';

export const Typography: FC<ITTypography> = (props) => {
  const {
    variant,
    color,
    weight,
    align = 'left',
    children,
    onClick,
    className,
    truncate,
    style,
    transform = 'none',
  } = props;

  const Tags: Record<ITVariants, keyof JSX.IntrinsicElements> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    bodyText: 'p',
    smallText: 'p',
  };

  const classNamedGenerated = classNames(
    styles[variant],
    color && styles[color],
    weight && styles[weight],
    styles[transform],
    styles[align],
    className,
  );

  const TagName = Tags[variant];

  const truncateString = (str: ReactNode, maxNumber: number): ReactNode => {
    if (typeof str === 'string') {
      return str.length <= maxNumber ? str : str.slice(0, maxNumber) + '...';
    }
    return str;
  };

  return (
    <TagName onClick={onClick} className={classNamedGenerated} style={style}>
      {truncate ? truncateString(children, truncate) : children}
    </TagName>
  );
};
