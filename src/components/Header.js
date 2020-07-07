import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">Musicrave</div>
      <a className="header__login" href="/auth/login">
        <img className="header__login-logo" src="images/spotify-logo.svg" />
      </a>
    </header>
  );
};

export default Header;
