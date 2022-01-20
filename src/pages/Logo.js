import { Link } from "react-router-dom";
import React from "react";
function Logo() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "#e16162" }}>
        {" "}
        Welcome To our Choose Your University Website
      </h1>
      <p style={{ textAlign: "center", color: "#e16162" }}>
        {" "}
        Our Website shows you a list of universities in different countries
        around the world and it gives you multiple information about them.
      </p>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkN2fEKXvRVsL0YmaWtnTD3UgypMqSUkySA&usqp=CAU"
        alt="this is an imge"
        style={{
          width: 300,
          height: 200,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 50,
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button
        style={{
          marginLeft: 1200,
          marginTop: 50,
          border: "none",
          backgroundColor: "#e16162",
          padding: 20,
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        <Link to={"/home"} style={{ color: "white", textDecoration: "none" }}>
          Log in
        </Link>
      </button>
    </>
  );
}

export default Logo;
