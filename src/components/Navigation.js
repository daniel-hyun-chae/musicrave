import React from "react";

const Navigation = () => {
  return (
    <nav>
      <a href="/auth/login">Login</a>
      <a href="/api/profile/me">Get profile info</a>
    </nav>
  );
};

export default Navigation;
