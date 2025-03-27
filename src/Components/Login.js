import React, { useState } from 'react';  
import './Login.css';  
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { TbBackground } from 'react-icons/tb';

const Login = () => {  
  const [passwordVisible, setPasswordVisible] = useState(false);  

  const togglePasswordVisibility = () => {  
    setPasswordVisible(!passwordVisible);  
  };  

  return (  
    <div className="bg-white">  
      <header className="header">  
        <div href="#" className="logo">E LEARNING</div>  
        <div className="nav-container">  
          <nav className="nav-links">  
            <a href="#">Về chúng tôi</a>  
            <a href="#">Khóa học</a>  
            <a href="#">Liên hệ với chúng tôi</a>  
            <a href="#">FAQ's</a>  
          </nav>  
        </div>  
      </header>  
      <main className="main-container">  
        <div className="form-container">  
        <div className="button-container">
        <Link to="/login">
        <button className="login-button" style={{ backgroundColor: '#4299e1', color: 'white' }}>Đăng nhập</button>        </Link>
        <Link to="/signup">
          <button className="register-button" style={{backgroundColor:'#edf2f7', color:'#005eff'}}>Đăng kí</button>
        </Link>
      </div>
          <div className="input-fields">  
            <div>  
              <label htmlFor="username">Tên đăng nhập</label>  
              <input   
                type="text"   
                id="username"   
                placeholder="Nhập Tên người dùng của bạn"   
                className="input-field"   
              />  
            </div>  
            <div>  
              <label htmlFor="password">Mật khẩu</label>  
              <div className="password-container">  
                <input   
                  type={passwordVisible ? "text" : "password"}   
                  id="password"   
                  placeholder="Nhập mật khẩu của bạn"   
                  className="input-field"   
                />  
                <i   
                  className={`fas fa-eye password-icon ${passwordVisible ? 'active' : ''}`}   
                  onClick={togglePasswordVisibility}  
                  style={{ cursor: 'pointer' }}  
                ></i>  
              </div>  
            </div>  
            <button className="submit-button">Đăng nhập</button>  
          </div>  
        </div>  
      </main>  
    </div>  
  );  
};  

export default Login;  