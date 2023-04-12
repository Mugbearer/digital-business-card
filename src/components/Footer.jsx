import React from "react";
import fbLogo from "../assets/facebook-logo.png";
import githubLogo from "../assets/github-logo.png";
import instaLogo from "../assets/instagram-logo.png";
import twitterLogo from "../assets/twitter-logo.png";

function Footer() {
  return (
    <footer>
      <nav>
        <a href="https://youtu.be/8pN2XslLfxo" target="_blank">
          <img src={twitterLogo} />
        </a>
        <a href="https://youtu.be/8pN2XslLfxo" target="_blank">
          <img src={fbLogo} />
        </a>
        <a href="https://youtu.be/8pN2XslLfxo" target="_blank">
          <img src={instaLogo} />
        </a>
        <a href="https://youtu.be/8pN2XslLfxo" target="_blank">
          <img src={githubLogo} />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
