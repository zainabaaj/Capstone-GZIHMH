import React from 'react';
import Image from 'next/image';
import UserProfile from "@/components/UserProfile"

const FeaturedCourses = ({ imageSrc, alt, title, duration, rating, price, user_id, userProfileImage }) => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-md mx-auto sm:max-w-xl shadow-md rounded-3xl p-2 my-3 cursor-pointer relative">
        <div className="overflow-hidden rounded-2xl relative">
          <Image
            src={imageSrc}
            alt={alt}
            width={500}
            height={300}
            className="object-cover h-40 rounded-2xl"
          />
          {/* UserProfile component */}
          <div className="user-profile-container absolute bottom-3 left-0 ml-3">
            {/* Pass the user_id and userProfileImage props to UserProfile */}
            <UserProfile user_id={user_id} image={userProfileImage} />
          </div>
          <p className="absolute right-2 top-3 bg-white rounded-xl p-2 cursor-pointer opacity-50 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-6 w-6 group-hover:opacity-50 opacity-1"
              stroke="gray"
            >
              <path
                d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
              ></path>
            </svg>
          </p>
        </div>
        <div className="mt-4 pl-2 mb-2">
          <p className="text-lg font-semibold text-gray-900 mb-0">{title}</p>
          <div className="flex items-center space-x-1 gap-2 mt-2">
            <p className="flex items-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#a1a1aa"
                viewBox="0 0 572 512"
              >
                <path
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
              <span className="ml-1" style={{ color: '#6b7280' }}>{duration}</span>
            </p>
            <p className="flex items-center py-2 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#a1a1aa"
                viewBox="0 0 576 512"
              >
                <path
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
              <span className="ml-1" style={{ color: '#6b7280' }}>{rating}</span>
            </p>
            <div className="flex items-center justify-center box-border overflow-hidden outline-none cursor-default w-16 h-8 opacity-100 bg-blue-600 rounded-full border-0">
              <span className="flex items-center p-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 rounded-xl">
                  {price}
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
