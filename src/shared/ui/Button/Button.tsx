import styles from './Button.module.scss';
import * as React from 'react';
import clsx from 'clsx';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({
                                                children,
                                                variant = 'primary',
                                                className,
                                                type = 'button',
                                                ...rest
                                              }) => {
  return (
    <button
      type={type}
      className={clsx(styles.btn, styles[`btn--${variant}`], className)}
      {...rest}
    >
      {children}
    </button>
  );
};