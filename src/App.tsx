// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import logo from "/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="flex justify-center bg-emerald-300 drop-shadow-gray-950">
        <figure>
          <img src={logo} className="w-50 h-40 invert-100 select-none" />
        </figure>
      </header>
    </div>
  );
}

export default App;
