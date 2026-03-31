import { CodeSquareIcon } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-green-800 dark:bg-green-400 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-200 hover:bg-green-600 dark:hover:bg-green-300 cursor-pointer">
        <CodeSquareIcon className="text-white w-6 h-6" />
      </div>
      {/* <h1 className='sm:text-xl hidden sm:block md:text-2xl text-green-800 dark:text-green-400 font-bold '>{"<Dev/>"}</h1> */}
      <h1 className="sm:text-xl hidden sm:block md:text-2xl text-green-800 dark:text-green-400 font-bold ">
        {"NNIOHS"}
      </h1>
    </div>
  );
};

export default Logo;
