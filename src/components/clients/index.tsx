import Image from 'next/image';
import React from 'react';
import { icons } from '../../constants';

export const Clients = () => {
  return (
    <section className='pt-14'>
      <div>
        <div className='absolute pt-6 left-1/4 pl-10 '>
          <Image src={icons.solution_round} alt='image not found' />
        </div>
      </div>
      <div className='pb-20'>
        <h2 className='font-Rajdhani text-black font-bold leading-10 text-6xl text-center pt-24'>
          Clients who trust us
        </h2>
        <p className='font-Formular text-gray-700	px-80 font-normal	leading-6 text-xl text-center pt-8'>
          We have teamed up with major technology platforms to keep giving our
          customers most upgraded world-class software performance.
        </p>
      </div>
      <div className='mb-16 mx-6 text-center'>
        <Image src={icons.bleufi} alt='no image found' />
      </div>
      <div className='my-16 mx-6 text-center'>
        <Image src={icons.shekunj} alt='no image found' />
      </div>
      <div className='my-16 mx-6 text-center'>
        <Image src={icons.poc} alt='no image found' />
      </div>
      <div className='my-16  mx-6 text-center'>
        <Image src={icons.club_rare} alt='no image found' />
      </div>
      <div className='text-center my-16'>
        <button className='font-Formular bg-red rounded-full transition duration-500 border-transparent border-solid border box-border font-medium h-16 text-base leading-5 mx-0 mt-7 overflow-visible text-white not-italic capitalize w-64 hover:bg-white hover:border-black hover:text-red lg:mx-0 lg:mt-0'>
          View All
        </button>
      </div>
      <div className='text-center bg-[#333] '>
        <p className='font-Formular text-white pt-20 px-52 box-border font-normal text-xl leading-6 mx-0 mt-0 mb-4 not-italic'>
          We have helped multiple startups, digital agencies, enterprises (big
          or small) and software product development companies to streamline
          their outsourcing experience without any hassle.
        </p>
        <button className='font-Formular border-white mt-8 mb-16 transition duration-500 bg-[#333] rounded-full mx-0 w-52 overflow-visible border-solid border box-border font-normal leading-4 py-5 px-10 text-white not-italic capitalize no-underline hover:bg-white hover:text-black hover:no-underline'>
          Talk To An Expert
        </button>
      </div>
    </section>
  );
};
