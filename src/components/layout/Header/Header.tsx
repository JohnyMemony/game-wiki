import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/svg/game-controller.svg';
import { ROUTES } from '../../../constants/routes';

import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to={ROUTES.HOME}>
            <img className="header__logo" src={Logo} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
}
