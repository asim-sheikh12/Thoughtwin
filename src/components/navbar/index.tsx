import Image from 'next/image';
import React from 'react';
import { icons } from '../../constants';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='items-center bg-white top-0 mt-0 py-3 sticky z-50'>
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
        <li className='text-gray-600 transition duration-500 hover:ease-out	font-medium	text-xl ml-8 hover:text-red hover:underline underline-offset-8'>
          <Link href='/about'>About Us</Link>
        </li>
        <li className='text-gray-600 transition duration-500 hover:ease-out	font-medium	text-xl ml-8 hover:text-red hover:underline underline-offset-8'>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li className='text-gray-600 transition duration-500 hover:ease-out	font-medium	text-xl ml-8 hover:text-red hover:underline underline-offset-8'>
          <Link href='/blogs'>Blog</Link>
        </li>
        <li className='text-gray-600 transition duration-500 hover:ease-out	font-medium	text-xl ml-8 hover:text-red hover:underline underline-offset-8'>
          <Link href='/ourteam'>Our Team</Link>
        </li>
        <li className='text-gray-600 transition duration-500 hover:ease-out	font-medium	text-xl ml-8 hover:text-red hover:underline underline-offset-8'>
          <Link href='/careers'>Careers</Link>
        </li>
        <li className='text-gray-600 transition duration-500 hover:ease-out	font-medium	text-xl ml-9 hover:text-red hover:underline underline-offset-8'>
          Services
        </li>
        <li className='ml-8'>
          <button className='font-Poppins transition duration-500 hover:ease-out border-2 border-red flex text-white font-medium bg-red rounded-full px-14 py-2  hover:bg-white hover:text-red hover:border-2 hover:border-black 	'>
            Contact Us
            <div className='ml-3 mt-1'>
              <Image
                src={icons.white_arrowIcon}
                alt='Image'
                width='25px'
                height='16px'
              />
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
