import React from "react";
import CardKaren from "./cardKaren.js";
import Footer from "./footer.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";

//create your first component
const Home = () => {
  return (
    <div id="page">
      <Navbar />
      <div id="body">
        <Jumbotron />
        <div className="container">
          <div
            className={
              "row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center g-4 p-5"
            }
          >
            <CardKaren />
            <CardKaren />
            <CardKaren />
            <CardKaren />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
