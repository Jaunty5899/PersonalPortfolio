// import { useState } from "react";
import mugShot from "./assets/mugShot.png";
import logo from "/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col gap-10 items-center">
      <header className="flex h-40 justify-center bg-emerald-300 drop-shadow-md w-screen">
        <figure>
          <img src={logo} className="size-40 select-none" />
        </figure>
      </header>
      <article className="flex gap-5">
        <figure className=" size-60 rounded-2xl overflow-hidden">
          <img src={mugShot} className="select-none" />
        </figure>
        <p className="w-110 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          voluptatibus dolor veritatis ipsa, veniam cumque accusantium
          dignissimos! Ducimus tempora sed numquam repudiandae dicta, labore
          vero incidunt accusantium. Fugiat, nobis aperiam? vero incidunt
          accusantium. Fugiat, nobis aperiam? vero incidunt accusantium. Fugiat,
          nobis aperiam? vero incidunt accusantium. Fugiat, nobis aperiam? vero
          incidunt accusantium. Fugiat, nobis aperiam? vero incidunt
          accusantium. Fugiat, nobis aperiam? vero incidunt accusantium. Fugiat,
          nobis aperiam?
        </p>
      </article>
      <article className="flex gap-5"></article>
    </div>
  );
}

export default App;
