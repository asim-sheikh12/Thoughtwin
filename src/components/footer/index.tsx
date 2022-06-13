import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { icons } from '../../constants';

export const Footer = () => {
  return (
    <section className='border-t-[#d6d6d6] border-solid border-t'>
      <div className='border-solid border-t-[#d6d6d6] border-t box-border flex px-24 pt-9 '>
        <div className='px-10 flex-grow  flex-1'>
          <Image src={icons.logoIcon} alt='logo' height={40} width={180} />
          <div>
            <h4 className='font-Formular font-bold py-2 text-lg leading-4'>
              Headquarter
            </h4>
            <p className='font-Formular not-italic font-normal tracking-wide text-sm leading-5 text-[#b0aaaa] capitalize cursor-pointer hover:text-black '>
              11 Sachidanand Nagar Annapurna Road, Indore (MP) - 452001
            </p>
            <h4 className='font-Formular font-bold py-2 text-lg leading-4'>
              Canada
            </h4>
            <p className='font-Formular not-italic font-normal tracking-wide text-sm leading-5 text-[#b0aaaa] capitalize cursor-pointer hover:text-black '>
              2201 Kennedy Rd, Lindsay, Ontario, Canada - K9V 4A4
            </p>
            {/* Social media section */}
            <div></div>
          </div>
        </div>
        <div className='flex-1'>
          <h4 className='font-Formular font-bold py-2 text-lg leading-4'>
            Hire Developers
          </h4>
          <ul>
            <li className='font-Formular not-italic font-normal  text-sm leading-5 text-[#b0aaaa] capitalize cursor-pointer mt-3 hover:text-black '>
              <Link href='/'>Python Developers</Link>
            </li>
            <li className='font-Formular not-italic font-normal   text-sm leading-5 text-[#b0aaaa] capitalize cursor-pointer my-3 hover:text-black '>
              <Link href='/'>Ruby On Rails Developers</Link>
            </li>
            <li className='font-Formular not-italic font-normal   text-sm leading-5 text-[#b0aaaa] capitalize cursor-pointer my-3 hover:text-black '>
              <Link href='/'> Node JS Developers</Link>
            </li>
            <li className='font-Formular not-italic font-normal   text-sm leading-5 text-[#b0aaaa] capitalize cursor-pointer my-3 hover:text-black '>
              <Link href='/'>AngularJS Developers</Link>
            </li>
            <li className='font-Formular not-italic font-normal   text-sm leading-5 text-[#b0aaaa] capitalize cursor-pointer my-3 hover:text-black '>
              <Link href='/'>Android Developers</Link>
            </li>
            <li className='font-Formular not-italic font-normal   text-sm leading-5 text-[#b0aaaa] capitalize cursor-pointer my-3 hover:text-black '>
              <Link href='/'>IOS Developers</Link>
            </li>
            <li className='font-Formular not-italic font-normal   text-sm leading-5 text-[#b0aaaa] capitalize cursor-pointer my-3 hover:text-black '>
              <Link href='/'> PHP & Laravel Developers</Link>
            </li>
            <li className='font-Formular not-italic font-normal   text-sm leading-5 text-[#b0aaaa] capitalize cursor-pointer my-3 hover:text-black '>
              <Link href='/'>Flutter Developers</Link>
            </li>
            <li className='font-Formular not-italic font-normal   text-sm leading-5 text-[#b0aaaa] capitalize cursor-pointer my-3 hover:text-black '>
              <Link href='/'>MERN Stack Development</Link>
            </li>
            <li className='font-Formular not-italic font-normal   text-sm leading-5 text-[#b0aaaa] capitalize cursor-pointer my-3 hover:text-black '>
              <Link href='/'>Blockchain Development</Link>
            </li>
          </ul>
        </div>
        <div className='flex-1'>
          <h4 className='font-Formular font-bold py-2 text-lg leading-4'>
            Quick links
          </h4>
          <ul>
            <li className='font-Formular not-italic font-normal  text-sm leading-5 text-[#b0aaaa] capitalize cursor-pointer my-3 hover:text-black '>
              Privacy Policy
            </li>
            <li className='font-Formular not-italic font-normal  text-sm leading-5 text-[#b0aaaa] capitalize cursor-pointer my-3 hover:text-black '>
              Terms & Conditions
            </li>
          </ul>
        </div>
        <div className='flex-1'>
          <h4 className='font-Formular font-bold py-2 text-lg leading-4'>
            Contact Us
          </h4>
          <p className='font-Formular not-italic font-normal  text-sm leading-5 text-[#b0aaaa] capitalize my-3 hover:text-black '>
            Feel free to drop us a note:
          </p>
          <h4 className='font-Formular text-[#4f4f4f] font-bold py-2'>
            For Sales & Business
          </h4>
          <p className='font-Formular not-italic font-normal tracking-wide text-sm leading-5 text-[#b0aaaa] capitalize cursor-pointer my-3 hover:text-black '>
            India: +91 6265525569
          </p>
          <h4 className='font-Formular text-[#4f4f4f] font-bold py-2'>
            For Job
          </h4>
          <p className='font-Formular not-italic font-normal  text-sm leading-5 text-[#b0aaaa] capitalize cursor-pointer my-3 hover:text-black '>
            India: +91 9977069348
          </p>
        </div>
      </div>
      <hr />
      <div className='box-border text-center '>
        <p className='font-Formular font-\ py-5 text-sm leading-5 '>
          Copyright @ 2022, All Rights Reserved. Thoughtwin
        </p>
      </div>
      <hr />
    </section>
  );
};
