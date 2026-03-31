import React from "react";
import { QuoteIcon } from "lucide-react";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";

type props = {
  user: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  };
};

const ReviewCard = ({ user }: props) => {
  return (
    <div className="bg-white shadow-md dark:bg-gray-800 rounded-lg m-3 p-6 relative">
      <QuoteIcon className="w-8 h-8 absolute top-4 right-4 text-blue-600 opacity-20" />
      <div className="mt-6 flex items-center">
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
      </div>
      {/* review text */}
      <p className="mt-6 text-base text-gray-600 dark:text-gray-300 font-semibold">
      {user.review}
      </p>
      {/* line */}
      <div className="w-full h-[1.2px] bg-gray-600 dark:bg-gray-300 opacity-10 mt-6 mb-6"></div>
      {/* user info */}
      <div className="flex items-center justify-center space-x-4">
        <Image
          src={user.userImage}
          alt={user.name}
          width={50}
          height={50}
          className="w-12 h-12 rounded-full"
        />
        <h2 className="font-black text-gray-800 dark:text-gray-200">
          {user.name}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {user.profession}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
