import React from "react";

function Main() {
  return (
    <main className="main">
      <h1 className="main__title">Fun Facts About React</h1>
      <ul className="main__facts">
        <li className="main__list-item">Was first released in 2013</li>
        <li className="main__list-item">
          Was originally created by Jordan Walke
        </li>
        <li className="main__list-item">Has well over 100K stars on GitHub</li>
        <li className="main__list-item">Is maintained by Facebook</li>
        <li className="main__list-item">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </main>
  );
}

export default Main;
