import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="section-footer">
      <p className="footer__statement">Eat, Love, & Code everyday!</p>
      <ul className="footer__list">
        <li className="footer__item">
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/danichae"
            target="blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="2x"
              className="footer__icon"
            />
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__link"
            href="https://github.com/daniel-chae"
            target="blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="footer__icon"
            />
          </a>
        </li>
      </ul>
      <p className="footer__copyright">Handcrafted by &#169; 2020 Hyun Chae</p>
    </footer>
  );
};

export default Footer;
