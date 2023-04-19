import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
const Footer1 = () => {
  return (
    <div className="footdiv">
      <ul className="ul1">
        <li className="contactus">Contacts</li>
        <li>
          <SocialIcon
            className="twitter"
            target="_blank"
            url="https://twitter.com/Crazyge39736438"
          />
          <SocialIcon
            target="_blank"
            url="https://www.instagram.com/shwaz_savage/?next=%2F"
          />
        </li>
      </ul>
      <ul className="ul2">
        <li>
          <Link to={"Creator"}>Creator</Link>
        </li>
        <li>Services</li>
      </ul>
    </div>
  );
};

export default Footer1;
