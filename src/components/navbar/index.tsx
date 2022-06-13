import Image from 'next/image';
import React from 'react';
import { icons } from '../../constants';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='items-center bg-white top-0 mt-0  border-solid border-b box-border block h-auto sticky z-50'>
      <ul className='flex justify-around	items-center px-20'>
        <li className='text-gray-600	font-medium	 mt-3 '>
          <Link href='/'>
            <Image
              className='cursor-pointer'
              src={icons.logoIcon}
              alt='Image'
              width='180px'
              height='40px'
            />
          </Link>
        </li>
        <li className='font-Formular text-gray-600 transition duration-500 hover:ease-out	font-medium	text-xl ml-8 hover:text-red hover:underline underline-offset-8'>
          <Link href='/about'>About Us</Link>
        </li>
        <li className='font-Formular text-gray-600 transition duration-500 hover:ease-out	font-medium	text-xl ml-8 hover:text-red hover:underline underline-offset-8'>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li className='font-Formular text-gray-600 transition duration-500 hover:ease-out	font-medium	text-xl ml-8 hover:text-red hover:underline underline-offset-8'>
          <Link href='/blogs'>Blog</Link>
        </li>
        <li className='font-Formular text-gray-600 transition duration-500 hover:ease-out	font-medium	text-xl ml-8 hover:text-red hover:underline underline-offset-8'>
          <Link href='/ourteam'>Our Team</Link>
        </li>
        <li className='font-Formular text-gray-600 transition duration-500 hover:ease-out	font-medium	text-xl ml-8 hover:text-red hover:underline underline-offset-8'>
          <Link href='/careers'>Careers</Link>
        </li>
        <li className='font-Formular text-gray-600 transition duration-500 hover:ease-out	font-medium	text-xl ml-9 hover:text-red hover:underline underline-offset-8'>
          Services
        </li>
        <li className='ml-8'>
          <button className='border- transition duration-500 bg-[center_right_2rem] bg-no-repeat rounded-full border-solid border box-border font-bold text-base leading-6 overflow-visible px-16 py-2.5 bg-red text-white not-italic normal-case hover:bg-white hover:border-black hover:text-red bg-white_arrowIcon hover:bg-red_arrowIcon'>
            Contact Us
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
