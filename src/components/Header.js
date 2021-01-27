import React from "react";

function Header() {
  return (
    <header className="container-fluid">
      <section className="row">
        <div className="col-md">
        <h1>Weather Forecast</h1>
        <p>Search below by city name or zip code</p>
      </div>
      </section>
    </header>
  );
}

export default Header;
