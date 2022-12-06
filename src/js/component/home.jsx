import React from "react";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";
import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {
  return (
    <div id="page">
		<Navbar />
      <div id="body">
        <Cards />
      </div>
    </div>
  );
};

export default Home;
