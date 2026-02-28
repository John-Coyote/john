import * as React from 'react';
import styles from './Header.module.scss';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import clsx from 'clsx';

interface HeaderProps {
  className?: string;
  onCreateClick: () => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
                                          className,
                                          onCreateClick,
                                          searchValue,
                                          onSearchChange,
                                        }) => {
  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.left}>
        <div className={styles.logo}>Jira Clone</div>

        <nav className={styles.nav}>
          <span>Your work</span>
          <span>Projects</span>
          <span>Filters</span>
          <span>Dashboards</span>
        </nav>
      </div>

      <div className={styles.center}>
        <Input
          placeholder="Search"
          value={searchValue}
          onChange={onSearchChange}
        />
      </div>

      <div className={styles.right}>
        <Button onClick={onCreateClick}>
          Create
        </Button>
      </div>
    </header>
  );
};