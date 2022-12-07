import React from "react";
import Cards from "./cards.jsx";
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
        
      </div>
    </div>
  );
};

export default Home;
