import React from "react";
import Header from "./component/Header.js";
import Footer from "./component/Footer";
import "./css/walter.css";
import "./css/App.css";
import WalterRouter from "./WalterRouter.js";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Header />
      <WalterRouter />
      <Footer />
      {/* <ToastContainer
        className="toast"
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
      /> */}
    </div>
  );
}

export default App;
