import Image from 'next/image';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Footer } from '../components/footer';
import { icons } from '../constants';

const Contact = () => {
  return (
    <>
      <div className='bg-contactus_banner h-auto bg-cover bg-[left_bottom_0rem]  flex'>
        <div className='flex flex-col flex-1 relative'>
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
        <div className='font-Formular bg-email bg-no-repeat bg-[top_right_3rem] flex-1 bg-white rounded-2xl box-border h-auto shadow-[0_4px_35px_#ff31311a]  p-5  pl-14 mt-36 mr-14 ml-32 '>
          <h1 className='box-border font-bold text-3xl leading-9 m-0 text-left text-black not-italic'>
            Drop us a line
          </h1>
          <p className='box-border font-normal text-base leading-5 mx-0 mt-0 mb-4 p-0 text-left not-italic text-[#777]'>
            Prepare for a quick response :)
          </p>
          <form>
            <div className='grid grid-rows-4 grid-flow-col'>
              <label className='font-Formular box-border block font-normal text-black not-italic'>
                First Name
              </label>
              <input
                type='text'
                name='fname'
                className='font-Formular rounded border-solid border box-border -mt-2.5 mb-2.5 h-11 text-base  overflow-visible px-2.5  pb-1.5 w-52 mr-9 focus:outline-none'
                placeholder='First Name'
                required
              />
              <label className='font-Formular'>Email</label>
              <input
                type='text'
                name='email'
                className='font-Formular rounded border-solid border box-border h-11 -mt-2.5  text-base overflow-visible px-2.5  pb-1.5 w-52 focus:outline-none'
                placeholder='Your Email'
                required
              />
              <label className='font-Formular'>Last Name</label>
              <input
                type='text'
                name='lname'
                className='font-Formular rounded border-solid border box-border h-11 text-base -mt-2.5 overflow-visible px-2.5  pb-1.5 w-52 focus:outline-none'
                placeholder='Last Name'
                required
              />
              <label className='font-Formular'>Contact Number</label>
              <input
                className='font-Formular rounded border-solid border box-border h-11 text-base -mt-2.5 overflow-visible px-2.5  pb-1.5 w-52 focus:outline-none'
                placeholder='Enter Mobile'
                required
              />
            </div>
            <label className='font-Formular mt-5 mb-5'>Message</label>
            <br />
            <input
              type='text'
              name='message'
              className='font-Formular rounded border-solid border box-border h-11 text-base mt-0 overflow-visible px-2.5  pb-1.5 w-[488px] focus:outline-none'
              placeholder='Write something here...'
              required
            />
            <div className='left-1/2 mt-5'>
              <ReCAPTCHA sitekey='6LfILAIeAAAAAAoxxeSdSLcBz3iAXmpmsA_LrgS1' />
            </div>
            <button className='font-Formular  bg-white text-red rounded-full border-black border-solid border box-border cursor-pointer block font-medium h-14 mb-0 mt-3 ml-auto overflow-visible mr-5 py-1.5 text-center not-italic normal-case no-underline w-full hover:text-white hover:bg-red'>
              Submit
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Contact;
