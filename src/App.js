import React from "react";
import Header from "./component/Header.js";
import Footer from "./component/Footer";
import Login from "./pages/login/Login.js";
import "./css/walter.css";
import FindId from "./pages/login/FindId.js";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <FindId />
      <Footer />
    </div>
  );
}

export default App;
