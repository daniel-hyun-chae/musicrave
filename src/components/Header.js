import React from "react";

const Header = () => {
  return (
    <header>
      <a href="/auth/login">Login</a>
      <a href="/api/profile/me">Get profile info</a>
    </header>
  );
};

export default Header;
