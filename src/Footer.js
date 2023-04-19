import React from "react";

const Footer = () => {
  const d=  new Date();
  return (
    <footer>
      <p>
      &#169;  {d.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
