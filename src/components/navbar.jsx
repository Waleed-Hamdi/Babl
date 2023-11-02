import React from "react";
import "../css/navbar.css";


const Navbar = () => {
  return (
    <header>
    <a href="#home" className="logo">BABL</a>
   <nav class="navigation">

        <a href="#ourvision"> Our Vision</a>
        <a href="#why">Why Babl</a>
        <a href="#journey">Journey</a>
        <a href="#contact">contact</a>
        

    </nav>
</header>

  );
};

export default Navbar;
