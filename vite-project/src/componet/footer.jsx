import React from 'react';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-300 text-white py-10 flex justify-around w-full">
      <div className="flex flex-col items-start">
        <h1 className="text-4xl mb-5">
          <span className="text-green-700">X</span>COOKING
        </h1>
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-lg font-bold mb-2">Contact details</h2>
        <div className="flex items-center mb-1">
          <FaPhoneSquareAlt className="mr-2" />
          <span>+35 465 9123</span>
        </div>
        <div className="flex items-center mb-1">
          <AiOutlineMail className="mr-2" />
          <span>Xcooking@gmail.com</span>
        </div>
        <div className="flex items-center mb-1">
          <IoLocationOutline className="mr-2" />
          <span>196 Alexandra road, Pietermaritzburg</span>
        </div>
        <p className="mt-4">&copy; 2024 X Cooking</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-bold mb-2">Follow Us</h2>
        <div className="flex space-x-4 mb-2">
          <SlSocialInstagram size={40} color='#FF6FCC' />
          <FaFacebook size={40} color='#2058FF' />
          <FaTwitter size={40} color='#5CA4FF' />
        </div>
      </div>
    </footer>
  );
}
