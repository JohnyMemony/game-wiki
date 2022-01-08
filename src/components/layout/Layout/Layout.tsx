import React from 'react';
import { Header } from '../Header/Header';

export const Layout: React.FC = (props) => {
  const {children} = props;

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
