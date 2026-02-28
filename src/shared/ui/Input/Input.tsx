import styles from './Input.module.scss';
import * as React from 'react';
import clsx from 'clsx';

export interface IProps {
  className?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const Input: React.FC<IProps> = ({
                                          className,
                                          value = '',
                                          label,
                                          placeholder,
                                          onChange,
                                        }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={styles.input}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};