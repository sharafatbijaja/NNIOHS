/**
 * ReviewCard Component
 * 
 * Individual testimonial/review card
 * Used inside ClientReview carousel
 * 
 * Displays:
 * - 5-star rating
 * - Quote/review text with decorative quote icon
 * - Client name and profession
 * - Client profile image
 * 
 * Props:
 * - user: { id, name, profession, userImage, review }
 */

import React from "react";
import { QuoteIcon } from "lucide-react"; // Decorative quote icon
import { FaStar } from "react-icons/fa6"; // Star rating icon
import Image from "next/image"; // Next.js optimized image

// Type definition for user data
type props = {
  user: {
    id: number; // Unique identifier
    name: string; // Client name
    profession: string; // Job title/role
    userImage: string; // Profile image URL
    review: string; // Testimonial text
  };
};

const ReviewCard = ({ user }: props) => {
  return (
    // Card container with shadow and rounded corners
    <div className="bg-white shadow-md dark:bg-gray-800 rounded-lg m-3 p-6 relative">
      {/* Decorative quote icon - top right corner */}
      <QuoteIcon className="w-8 h-8 absolute top-4 right-4 text-primary opacity-20" />

      {/* 5-Star Rating */}
      <div className="mt-6 flex items-center">
        {/* Show 5 yellow stars */}
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
      </div>

      {/* Review/Testimonial Text */}
      <p className="mt-6 text-base text-gray-600 dark:text-gray-300 font-semibold">
        {user.review}
      </p>

      {/* Divider line between review and user info */}
      <div className="w-full h-[1.2px] bg-gray-600 dark:bg-gray-300 opacity-10 mt-6 mb-6"></div>

      {/* User Info Section - Profile image, name, profession */}
      <div className="flex items-center justify-center space-x-4">
        {/* Profile Image - Next.js optimized, circular */}
        <Image
          src={user.userImage}
          alt={user.name} // Important for accessibility
          width={50}
          height={50}
          className="w-12 h-12 rounded-full" // Circle shape
        />

        {/* User details */}
        <div>
          {/* Client Name */}
          <h2 className="font-black text-gray-800 dark:text-gray-200">
            {user.name}
          </h2>
          {/* Client Profession/Title */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {user.profession}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
