import React from "react";
import { Link } from "react-router-dom";
import SkyLabLogo from "../Assets/Images/skylab_logo.png";
import { FaSquarePlus } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaClipboardQuestion } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="p-4 flex flex-col justify-center h-[100vh]">
      <header className="flex mx-auto gap-4 p-8 top-8">
        <img src={SkyLabLogo} className="h-[4rem]" alt="SKYLAB" />
        <h1 className="font-[600] text-6xl text-sky-pink font-bebasNeue text-center m-auto tracking-widest ">
          Skyform
        </h1>
      </header>

      <div className="flex m-auto">
        <Link
          to="/create-form"
          className="w-[220px] border-2 border-sky-green text-sky-green text-xl p-4 m-2 text-center flex flex-col justify-center gap-4  rounded-xl hover:text-sky-pink hover:border-sky-pink transition-colors duration-200 "
        >
          {" "}
          <FaSquarePlus className="m-auto text-6xl" /> Form Oluştur
        </Link>
        <Link
          to="/view-form"
          className="w-[220px] border-2 border-sky-green text-sky-green text-xl p-4 m-2 text-center flex flex-col justify-center gap-4  rounded-xl hover:text-sky-pink hover:border-sky-pink transition-colors duration-200"
        >
          {" "}
          <FaFileLines className="m-auto text-6xl"/> Form Görüntüle
        </Link>
        <Link
          to="/view-responses"
          className="w-[220px] border-2 border-sky-green text-sky-green text-xl p-4 m-2 text-center flex flex-col justify-center gap-4  rounded-xl hover:text-sky-pink hover:border-sky-pink transition-colors duration-200"
        >
          < FaClipboardQuestion className="m-auto text-6xl"/>  
          Cevapları Görüntüle
        </Link>
      </div>
    </div>
  );
};

export default Home;
