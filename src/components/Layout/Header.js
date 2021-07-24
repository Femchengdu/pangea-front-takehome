import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <main>
      <section>
        <div>
          <h1>All Products</h1>
          <p>A 360&#176; look at Lumin</p>
        </div>
        <div className="select-position-wrapper">
          <div className="select-wrapper material-icons">
            <select name="select" id="select" class="select">
              <option value>Filter by</option>
            </select>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Header;
