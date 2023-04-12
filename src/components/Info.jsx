import React from "react";
import liane from "../assets/liane.png";
import mail from "../assets/mail.png";
import linkedIn from "../assets/Linked-In.png";

function Info() {
  return (
    <header>
      <img src={liane} id="portrait" />
      <h1>Gusion Lodicakes</h1>
      <p className="profession">Men Intercourser</p>
      <p className="website">gusionlodicakes.website</p>
      <nav>
        <a
          href="https://youtu.be/8pN2XslLfxo"
          target="_blank"
          className="header-link email"
        >
          <img src={mail} />
          <div>Email</div>
        </a>
        <a
          href="https://youtu.be/8pN2XslLfxo"
          target="_blank"
          className="header-link linkedin"
        >
          <img src={linkedIn} />
          <div>LinkedIn</div>
        </a>
      </nav>
    </header>
  );
}

export default Info;
