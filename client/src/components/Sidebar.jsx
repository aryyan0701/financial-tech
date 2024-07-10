import React from 'react';
import { Link } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import { IoHelpCircleSharp } from "react-icons/io5";
import { FaHandsHelping, FaBlog } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside className="fixed h-full w-64 pt-14 bg-white shadow-lg z-10">
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <ul className="space-y-6">
            <li className="flex items-center space-x-2 text-gray-500">
              <MdSpaceDashboard className='inline mr-2 mb-1'/> 
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li className="flex items-center space-x-2 text-gray-500">
              <FaBlog className='inline mr-2 mb-1'/> 
              <Link to='/blogs'>Other Module</Link>
            </li>
            <li className="flex items-center space-x-2 text-gray-500">
              <IoHelpCircleSharp className='inline mr-2 mb-1'/> 
              <Link to='/schemes'>How it works..?</Link>
            </li>
            <li className="flex items-center space-x-2 text-gray-500">
              <FaHandsHelping className='inline mr-2 mb-1'/> 
              <Link to='/help'>Support & Help</Link>
            </li>
          </ul>
          <div className=" mt-[20rem]">
          <ul className="space-y-6">
            <li className="flex items-center space-x-2 text-gray-500">
              <IoMdLogOut className='inline mr-2 mb-1'/> 
              <Link to='/logout'>Log Out</Link>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
