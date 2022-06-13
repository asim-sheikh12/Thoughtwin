import Image from 'next/image';
import React from 'react';
import { icons } from '../constants';

const Contact = () => {
  return (
    <div className='bg-contactus_banner h-[55vh] bg-cover bg-[left_bottom_0rem] relative flex'>
      <div className='flex flex-col flex-1'>
        <div className='h-36 mt-24 text-center border-[#e0e0e0] bg-[#fff] border rounded-xl w-64 ml-48 shadow-[0_4px_35px_#ff31311a]'>
          <div className='max-w-full -mt-16 h-24 w-24 object-cover ml-20 border-white border-solid border box-border rounded-full'>
            <Image
              src={icons.hr1}
              alt='Karishma Agrawal'
              className='rounded-full'
            />
          </div>
          <h2 className='font-Fromular not-italic font-medium text-xl text-black mt-2 mb-2'>
            Karishma Agrawal
          </h2>
          <ul>
            <li className='font-Fromular text-[#333] not-italic font-normal text-sm leading-5 pb-2'>
              <span className='font-Fromular text-[#FF0000]'>HR Manager</span>{' '}
              at Thoughtwin
            </li>
            <li className='font-Fromular text-[#333] not-italic font-normal text-sm leading-5 pb-2'>
              +91 9977069348
            </li>
          </ul>
        </div>

        <div className='h-36 text-center bg-[#fff] border border-[#e0e0e0] rounded-xl w-64 ml-80 mt-32 shadow-[0_4px_35px_#ff31311a]'>
          <div className='max-w-full -mt-16 h-24 w-24 object-cover ml-20 border-white border-solid border box-border rounded-full'>
            <Image
              src={icons.hr2}
              alt='Shreeya Sarmandal'
              className='rounded-full'
            />
          </div>
          <h2 className='font-Fromular not-italic font-medium text-xl text-black mt-2 mb-2'>
            Shreeya Sarmandal
          </h2>
          <ul>
            <li className='font-Fromular text-[#333] not-italic font-normal text-sm leading-5 pb-2'>
              <span className='font-Fromular text-[#FF0000]'>
                HR Executive{' '}
              </span>{' '}
              at Thoughtwin{' '}
            </li>
            <li className='font-Fromular text-[#333] not-italic font-normal text-sm leading-5 pb-2'>
              +91 8839947483
            </li>
          </ul>
        </div>
      </div>
      <div className='flex-1 bg-white rounded-2xl box-border h-auto  p-5 relative w-full bg-email bg-no-repeat bg-right-top mr-32 mt-36 ml-28'>
        <h1 className='box-border font-bold text-3xl leading-9 m-0 text-left text-black not-italic'>
          Drop us a line
        </h1>
        <p className='box-border font-normal text-base leading-5 mx-0 mt-0 mb-4 p-0 text-left not-italic'>
          Prepare for a quick response :)
        </p>
        <form>
          <div className='grid grid-rows-4 grid-flow-col'>
            <label>First Name</label>
            <input
              className='rounded border-solid border box-border h-11 text-base mt-0 overflow-visible px-2.5  pb-1.5 w-60'
              placeholder='First Name'
            ></input>
            <label>Email</label>
            <input
              className='rounded border-solid border box-border h-11 text-base mt-0 overflow-visible px-2.5  pb-1.5 w-60'
              placeholder='Your Email'
            ></input>
            <label>Last Name</label>
            <input
              className='rounded border-solid border box-border h-11 text-base mt-0 overflow-visible px-2.5  pb-1.5 w-60'
              placeholder='Last Name'
            ></input>
            <label className='mb-0'>Contact Number</label>
            <input
              className='rounded border-solid border box-border h-11 text-base mt-0 overflow-visible px-2.5  pb-1.5 w-60'
              placeholder='Enter Mobile'
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
