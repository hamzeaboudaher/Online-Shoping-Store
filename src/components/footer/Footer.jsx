import React from "react";
import './Footer.css';



function Footer() {


  return (

    
    <footer className="main-container" >
         

    <div >

    <div className="social-icons">
  <a href="https://github.com/hamzeaboudaher/Online-Shoping-Store"><i className="fab fa-facebook"></i></a>
  <a href=""><i className="fab fa-twitter"></i></a>
  <a href=""><i className="fab fa-instagram"></i></a>
  <a href="https://github.com/hamzeaboudaher/Online-Shoping-Store"><i className="fab fa-youtube"></i></a>
  <a href=""><i className="fab fa-google-plus"></i></a>
</div>



      <div className="footer-Nav">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="https://github.com/hamzeaboudaher/Online-Shoping-Store">News</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contect us</a></li>
          <li><a href="">Our Team</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p>Copyright &copy;2024; Designed by <span className="designer">Atef , Katharina and Hamze</span></p>
    </div>

  </footer>

  );
}

export default Footer;
