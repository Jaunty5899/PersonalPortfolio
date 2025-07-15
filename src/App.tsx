// import { useState } from "react";
import mugShot from "./assets/mugShot.png";
import logo from "/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <header className="flex justify-center bg-emerald-300 drop-shadow-md w-full">
        <figure>
          <img src={logo} className="w-50 h-40 select-none" />
        </figure>
      </header>
      <article className="flex justify-end gap-5">
        <figure className="w-80 h-80 rounded-2xl overflow-hidden drop-shadow-lg">
          <img src={mugShot} className="w-80 select-none" />
        </figure>
        <p className="w-250 text-justify font-mono">
          As a passionate Frontend Developer, I specialize in creating dynamic
          and responsive web applications that deliver exceptional user
          experiences. With a strong foundation in HTML, CSS, and JavaScript, I
          leverage modern frameworks and libraries such as React.js, Redux, and
          Node.js to build intuitive interfaces and seamless functionality.
          <br />
          Notable projects in my portfolio include a comprehensive Weather App
          that provides real-time data and a WhatsApp Clone that showcases my
          skills in building interactive and engaging applications. These
          projects reflect my commitment to continuous learning and my ability
          to adapt to new technologies and trends in the ever-evolving web
          development landscape.
          <br />I believe in the power of collaboration and open communication,
          which drives my approach to teamwork and project management. I am
          always eager to learn from others and share my knowledge, fostering an
          environment of growth and innovation.
          <br />
          <br />
          Thank you for visiting my portfolio. I look forward to connecting and
          collaborating on exciting projects that push the boundaries of web
          development!
        </p>
      </article>
    </div>
  );
}

export default App;
