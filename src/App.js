import React from "react";
import Header from "./component/Header.js";
import Footer from "./component/Footer";
import "./css/walter.css";
import "./css/App.css";
import Login from "./pages/login/Login.js";
import FindId from "./pages/login/FindId.js";
import FindIdComplete from "./pages/login/FindIdComplete.js";
import FindPassword from "./pages/login/FindPassword.js";
import PasswordReset from "./pages/login/PasswordReset.js";
import ResetPasswordComplete from "./pages/login/ResetPasswordComplete.js";
import Position from "./pages/position/Position.js";
import Company from "./pages/company/Company.js";
import Suggest from "./pages/suggest/Suggest.js";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      {/* <ToastContainer
        className="toast"
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
      /> */}
      <Header />
      {/* <Login /> */}
      {/* <FindId /> */}
      {/* <FindIdComplete /> */}
      {/* <FindPassword /> */}
      {/* <PasswordReset /> */}
      {/* <ResetPasswordComplete /> */}
      {/* <Position /> */}
      {/* <Company /> */}
      <Suggest />
      <Footer />
    </div>
  );
}

export default App;
