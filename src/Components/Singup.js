import React, { useState } from "react";
import "./Singup.css"; // Assuming the CSS file is named styles.css
import { Link } from "react-router-dom"; // Import Link from react-router-dom
function RegistrationForm() {
  const [role, setRole] = useState("Học viên");
  const [dob, setDob] = useState(""); // State to manage date of birth

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDob(selectedDate); // Update the state with the selected date
    console.log("Selected Date:", selectedDate);
  };

  return (
    <div className="bg-main">
      {/* Header */}
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

      {/* Main Form */}
      <main className="form-container">
        <div className="button-container">
        <Link to="/login">
          <button className="login-button">Đăng nhập</button>
        </Link>
        <Link to="/signup">
          <button className="register-button">Đăng kí</button>
        </Link>
      </div>

        <form>
          <div className="form-fields">
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Địa chỉ email <span className="required">*</span>:
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="cmc@gmail.com"
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Số điện thoại <span className="required">*</span>:
              </label>
              <div className="form-phone">
                <select id="phone-code" className="form-select">
                  <option>+84</option>
                </select>
                <input
                  type="text"
                  id="phone"
                  className="form-input-phone"
                  placeholder="Nhập số điện thoại"
                />
              </div>
            </div>

            {/* Name */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Họ và tên <span className="required">*</span>:
              </label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Nhập tên"
              />
            </div>

            {/* Username */}
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Tên đăng nhập <span className="required">*</span>:
              </label>
              <input
                type="text"
                id="username"
                className="form-input"
                placeholder="Nhập tên đăng nhập"
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Mật khẩu <span className="required">*</span>:
              </label>
              <div className="form-password">
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  placeholder="Nhập mật khẩu"
                />
                <i className="fas fa-eye password-icon"></i>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirm-password" className="form-label">
                Nhập lại mật khẩu <span className="required">*</span>:
              </label>
              <div className="form-password">
                <input
                  type="password"
                  id="confirm-password"
                  className="form-input"
                  placeholder="Nhập lại mật khẩu"
                />
                <i className="fas fa-eye password-icon"></i>
              </div>
            </div>

            {/* Additional Fields */}
            <div className="form-row">
              {/* Date of Birth */}
              <div className="form-group">
                <label htmlFor="dob" className="form-label">Ngày sinh:</label>
                <input
                  type="date"
                  id="dob"
                  className="form-input"
                  value={dob}
                  onChange={handleDateChange}
                />
              </div>
            </div>

            {/* Gender */}
            <div className="form-group">
              <label className="form-label">Giới tính:</label>
              <div className="form-radio-group">
                <label className="form-radio">
                  <input type="radio" name="gender" defaultChecked /> Nam
                </label>
                <label className="form-radio">
                  <input type="radio" name="gender" /> Nữ
                </label>
              </div>
            </div>
          </div>

{/* Address */}  
<div className="form-group">  
<label htmlFor="address" className="form-label" style={{ padding: '20px 0' }}>Địa chỉ:</label>    <input  
    type="text"  
    id="address"  
    className="form-input"  
    placeholder="Nhập địa chỉ"  
  />  
</div>  

{/* Role */}  
<div className="form-group">  
  <label className="form-label">Quyền đăng kí:</label>  
  <div className="form-radio-group">  
    <label className="form-radio">  
      <input  
        type="radio"  
        name="role"  
        value="Học viên"  
        checked={role === "Học viên"}  
        onChange={handleRoleChange}  
      /> Học viên  
    </label>  
    <label className="form-radio">  
      <input  
        type="radio"  
        name="role"  
        value="Giảng viên"  
        checked={role === "Giảng viên"}  
        onChange={handleRoleChange}  
      /> Giảng viên  
    </label>  
  </div>  
</div>  

{/* Conditional Fields */}  
{role === "Giảng viên" && (  
  <>  
    {/* Certificate */}  
    <div className="form-group conditional-field">  
      <label htmlFor="certificate" className="form-label">Chứng chỉ:</label>  
      <select id="certificate" className="form-select">  
        <option>AWS</option>  
        <option>OCPJP</option>  
      </select>  
    </div>  

{/* Experience */}
<div className="form-group conditional-field">
  <label htmlFor="experience" className="form-label">Năm kinh nghiệm:</label>
  <div className="form-experience">
    <select id="experience" className="form-select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
    </select>
    <span>(năm)</span>
  </div>
</div> 
  </>  
)}  
        </form>

        {/* Submit Button */}
        <div className="form-footer">
          <button type="submit" className="form-submit-btn">Đăng kí</button>
        </div>
      </main>
    </div>
  );
}

export default RegistrationForm;