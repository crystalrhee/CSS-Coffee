import React from "react";
import "./App.css";
import Header from "./components/Header";
import Coffee from "./components/Coffee";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div class="container">
        <Coffee></Coffee>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
