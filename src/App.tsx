// import { useState } from "react";
import mugShot from "./assets/mugShot.png";
import logo from "/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col gap-10 items-center bg-gray-950">
      <header className="flex justify-center bg-emerald-300 drop-shadow-md w-full">
        <figure>
          <img src={logo} className="size-30 select-none" />
        </figure>
      </header>
      <article className="flex justify-end gap-5">
        <figure className="size-60 rounded-2xl overflow-hidden">
          <img src={mugShot} className="select-none" />
        </figure>
      </article>
    </div>
  );
}

export default App;
