import React from "react";
import { Link } from "react-router-dom";
const Missing = () => {
  return (
    <main style={{
      paddingTop:"30px",
      color:"blue",
      fontSize:"30px"

    }}>
      <h2>
        OOOOPS! looks like the page you are looking for is missing 
      </h2>
      <p>
        <Link style={{
          textDecoration:"none",
          color:"black",
          fontSize:"20px",
          fontWeight:"bold"
        }} to={"/"}>
          CLICK TO GO TO HOME PAGE
        </Link>
      </p>
    </main>
  );
};

export default Missing;
