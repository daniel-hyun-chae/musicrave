import React from "react";

// import components
import Header from "./components/Header";
import Search from "./components/Search";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Search />
      <Navigation />
    </div>
  );
};

export default App;
