import React from "react";

const HeroSction = () => {
  return (
    <div className="max-w-6xl mx-4 md:mx-auto flex flex-col-reverse  md:flex-row items-center justify-center my-20 bg-gray-300 rounded-md p-10 md:p-20">
      <div>
        <h3 className="text-2xl md:text-5xl font-bold text-gray-700 mb-10 tracking-[2px]">
          Books to freshen up your bookshelf
        </h3>
        <button className="text-white bg-green-600 rounded-md px-6 py-1.5 cursor-pointer text-xl">
          View The List
        </button>
      </div>
      <div className="mb-10 md:mb-0">
        <img src="/pngwing 1.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSction;
