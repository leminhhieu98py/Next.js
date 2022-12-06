import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import React, { FC } from 'react';

interface Props {
  children?: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
