import * as React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import {Button} from "@shared/ui/Button";
import {Input} from "@shared/ui/Input";
import {NavLink} from "react-router-dom";

interface HeaderProps {
  className?: string;
  onCreateClick?: () => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
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
          <NavLink
            to="/your-work"
            className={({ isActive }) =>
              clsx(styles.link, isActive && styles.active)
            }
          >
            Your work
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              clsx(styles.link, isActive && styles.active)
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/filters"
            className={({ isActive }) =>
              clsx(styles.link, isActive && styles.active)
            }
          >
            Filters
          </NavLink>

          <NavLink
            to="/dashboards"
            className={({ isActive }) =>
              clsx(styles.link, isActive && styles.active)
            }
          >
            Dashboards
          </NavLink>
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