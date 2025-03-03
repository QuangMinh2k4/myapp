import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="app-wrapper">
      <header className="navbar">
        <div className="container">
          <div className="navbar-logo"><a href="#">OneSchool</a></div>
          <nav className="navbar-menu">
            <ul className="menu-list">
              <li><a href="#home-section" className="menu-link">Home</a></li>
              <li><a href="#courses-section" className="menu-link">Courses</a></li>
              <li><a href="#programs-section" className="menu-link">Programs</a></li>
              <li><a href="#teachers-section" className="menu-link">Teachers</a></li>
              <li><a href="#contact-section" className="menu-link cta-button">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="intro" id="home-section">
        <div className="intro-background">
          <div className="container">
            <div className="row">
              <div className="col-left">
                <h1>Learn From The Experts</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                <a href="#" className="btn">Admission Now</a>
              </div>
              <div className="col-right">
                <form className="form-box">
                  <h3>Sign Up</h3>
                  <input type="text" className="form-input" placeholder="Email Address" />
                  <input type="password" className="form-input" placeholder="Password" />
                  <input type="password" className="form-input" placeholder="Re-type Password" />
                  <input type="submit" className="btn" value="Sign Up" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;