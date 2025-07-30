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
      <article className="flex w-full justify-evenly">
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" />
        </a>
        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" />
        </a>
        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
        </a>
        <a href="https://materializecss.com/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" />
        </a>
        <a href="https://mui.com/" target="_blank" rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
        </a>
        <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" />
        </a>
        <a href="https://postman.com" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" />
        </a>
        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" />
        </a>
        <a
          href="https://www.adobe.com/in/products/illustrator.html"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" />
        </a>
        <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" />
        </a>
      </article>
    </div>
  );
}

export default App;
