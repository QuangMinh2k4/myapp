import React from "react";
import "./Trangchu.css"; // Assuming the CSS file is named styles.css
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function ELearning() {
  const courses = [
    {
      image: 'C:\DemoWeb\my-app\public\img\OIP.jpg',
      category: "Java",
      duration: "3 Month",
      title: "Java Core",
      description: "Cung cấp kiến thức cơ bản về OOP, design pattern",
    },
    {
      category: "Web",
      duration: "3 Month",
      title: "HTML",
      description: "Cung cấp kiến thức về Web",
    },
    {
      category: "Python",
      duration: "3 Month",
      title: "Python",
      description: "Cung cấp kiến thức cơ bản về Python, OOP",
    },
    {
      category: "IT",
      duration: "3 Month",
      title: "Kiến thức nhập môn",
      description: "Cung cấp kiến thức nền tảng về CNTT",
    },
    {
      category: "SQL",
      duration: "3 Month",
      title: "My SQL",
      description: "Cung cấp kiến thức truy vấn cơ bản, khái quát View, Index, Trigger",
    },
    {
        category: "SQL",
        duration: "3 Month",
        title: "My SQL",
        description: "Cung cấp kiến thức truy vấn cơ bản, khái quát View, Index, Trigger",
      },
      {
        category: "SQL",
        duration: "3 Month",
        title: "My SQL",
        description: "Cung cấp kiến thức truy vấn cơ bản, khái quát View, Index, Trigger",
      },
      {
        category: "SQL",
        duration: "3 Month",
        title: "My SQL",
        description: "Cung cấp kiến thức truy vấn cơ bản, khái quát View, Index, Trigger",
      },
  ];

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
      <div href="#" className="logo">E LEARNING</div>
      <nav>
          <a href="#">
            <i className="fas fa-home"></i> Trang chủ
          </a>
          <a href="#">
            <i className="fas fa-chart-line"></i> Tiến độ
          </a>
          <a href="#">
            <i className="fas fa-file-alt"></i> Bài viết
          </a>
          <a href="#">
            <i className="fas fa-book"></i> Khóa học của tôi
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="search-bar">
            <input type="text" placeholder="Bạn muốn học?" />
            <i className="fas fa-search search-icon"></i>
          </div>
          <div className="notification">
            <i className="fas fa-bell"></i>
            <div className="avatar"></div>
          </div>
        </header>

        {/* Banner */}
        <div className="banner"></div>
        <div className="pagination">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Courses Section */}
        <section className="courses">
          <div className="courses-header">
            <h2>Khóa học</h2>
          </div>
          <div className="course-grid">
            {courses.map((course, index) => (
              <div className="course-card" key={index}>
                <div className="course-header">
                  <span>{course.category}</span>
                  <span>{course.duration}</span>
                </div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ELearning;