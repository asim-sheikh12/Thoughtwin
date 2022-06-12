import Image from 'next/image';
import React from 'react';
import { icons } from '../../constants';

export const Solutions = () => {
  return (
    <div className='py-10'>
      <div>
        <div className='absolute pt-6 left-1/4 pl-10 '>
          <Image src={icons.solution_round} alt='image not found' />
        </div>
      </div>
      <div className='pb-20'>
        <h2 className='font-Rajdhani text-black font-bold leading-10 text-6xl text-center pt-24'>
          Solutions we deliver
        </h2>
        <p className='font-Formular text-gray-700	px-80 font-normal	leading-6 text-xl text-center pt-8'>
          Thoughtwin IT Solutions assists to develop an impeccable website and
          mobile application. We serve on numerous domains and transform
          client's thoughts into reality.
        </p>
      </div>
      <div className='flex justify-around mx-16'>
        <div className='flex-1	text-center px-6 hover:duration-[2000ms] py-8 cursor-pointer mx-3 rounded-xl group border-2 border-neutral-50 transition hover:border-black '>
          <Image src={icons.web_development} alt='image not found' />
          <p className='font-Formular font-extrabold duration-200	text-base leading-5 uppercase tracking-wider	 text-text text-center my-3 group-hover:text-red'>
            WEB DEVELOPMENT
          </p>
          <p className='font-Formular text-text font-light text-base leading-5 text-center '>
            We offer one of the best Web Development services in numerous
            countries.
          </p>
        </div>
        <div className='flex-1	text-center px-6 hover:duration-[2000ms] py-8 cursor-pointer mx-3 rounded-xl group border-2 border-neutral-50 transition hover:border-black '>
          <Image src={icons.web_development} alt='image not found' />
          <p className='font-Formular font-extrabold duration-200	text-base leading-5 uppercase tracking-wider	 text-text text-center my-3 group-hover:text-red'>
            UI UX DESIGN
          </p>
          <p className='font-Formular text-text font-light text-base leading-5 text-center '>
            We have profitient UI/UX Designers for interface design,user
            experience and conversation optimization
          </p>
        </div>
        <div className='flex-1	text-center px-6 hover:duration-[2000ms] py-8 cursor-pointer mx-3 rounded-xl group border-2 border-neutral-50 transition hover:border-black '>
          <Image src={icons.web_development} alt='image not found' />
          <p className='font-Formular font-extrabold duration-200	text-base leading-5 uppercase tracking-wider	 text-text text-center my-3 group-hover:text-red'>
            MOBILE APP DEVELOPMENT
          </p>
          <p className='font-Formular text-text font-light text-base leading-5 text-center '>
            We provide professional Android, IOS, React Native and Flutter
            Developers.
          </p>
        </div>
        <div className='flex-1	text-center px-6 hover:duration-[2000ms] py-8 cursor-pointer mx-3 rounded-xl group border-2 border-neutral-50 transition hover:border-black '>
          <Image src={icons.web_development} alt='image not found' />
          <p className='font-Formular font-extrabold duration-200	text-base leading-5 uppercase tracking-wider	 text-text text-center my-3 group-hover:text-red'>
            IOT DEVELOPMENT
          </p>
          <p className='font-Formular text-text font-light text-base leading-5 text-center '>
            We assist to build smart Internet of Things applications for our
            clients.
          </p>
        </div>
      </div>
    </div>
  );
};
