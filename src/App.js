import React from "react";
import Header from "./component/Header.js";
import Footer from "./component/Footer";
import Login from "./pages/login/Login.js";
import "./css/walter.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
