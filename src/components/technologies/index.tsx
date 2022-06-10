import Image from 'next/image';
import React from 'react';
import { icons } from '../../constants';

export const Technologies = () => {
  return (
    <section className='py-2'>
      <div className='absolute pt-6 right-1/4'>
        <Image src={icons.techno_round} alt='image not found' />
      </div>
      <div className='pb-20'>
        <h2 className='font-Rajdhani text-black font-bold leading-10 text-6xl text-center pt-24'>
          Technologies we work with
        </h2>
        <p className='font-Formular text-gray-700	px-80 font-normal	leading-6 text-xl text-center pt-8'>
          We have teamed up with major technology platforms to keep giving our
          customers most upgraded world-class software performance.
        </p>
      </div>
      <div className='grid grid-cols-4 text-center mx-32 justify-center'>
        <div className='bg-no-repeat bg-40% hover:duration-[600ms] bg-center border-solid border box-border h-40 px-0 py-10 text-center ease-out 0s bg-python hover:bg-python_hover hover:bg-[#e4c603]'></div>
        <div className='bg-no-repeat bg-40% hover:duration-[800ms] bg-center border-solid border box-border h-40 px-0 py-10 text-center ease-out 0s bg-rails hover:bg-rails_hover hover:bg-[#c91f25]'></div>
        <div className='bg-no-repeat bg-40% hover:duration-[800ms] bg-center border-solid border box-border h-40 px-0 py-10 text-center ease-out 0s bg-nodejs hover:bg-nodejs_hover hover:bg-[#166629]'></div>
        <div className='bg-no-repeat bg-40% hover:duration-[800ms] bg-center border-solid border box-border h-40 px-0 py-10 text-center ease-out 0s bg-angularjs hover:bg-angularjs_hover hover:bg-[#dc1f26]'></div>
        <div className='bg-no-repeat bg-40% hover:duration-[800ms] bg-center border-solid border box-border h-40 px-0 py-10 text-center ease-out 0s bg-react hover:bg-react_hover hover:bg-[#056b85]'></div>
        <div className='bg-no-repeat bg-40% hover:duration-[800ms] bg-center border-solid border box-border h-40 px-0 py-10 text-center ease-out 0s bg-php hover:bg-php_hover hover:bg-[#073e9e]'></div>
        <div className='bg-no-repeat bg-40% hover:duration-[800ms] bg-center border-solid border box-border h-40 px-0 py-10 text-center ease-out 0s bg-android hover:bg-android_hover hover:bg-[#257202]'></div>
        <div className='bg-no-repeat bg-40% hover:duration-[800ms] bg-center border-solid border box-border h-40 px-0 py-10 text-center ease-out 0s bg-ios hover:bg-ios_hover hover:bg-[#040708]'></div>
        <div className='bg-no-repeat bg-40% hover:duration-[800ms] bg-center border-solid border box-border h-40 px-0 py-10 text-center ease-out 0s bg-blockchain hover:bg-blockchain_hover hover:bg-[#0056b3]'></div>
        <div className='bg-no-repeat bg-40% hover:duration-[800ms] bg-center border-solid border box-border h-40 px-0 py-10 text-center ease-out 0s bg-ai hover:bg-ai_hover hover:bg-[#af3386]'></div>
        <div className='bg-no-repeat bg-40% hover:duration-[800ms] bg-center border-solid border box-border h-40 px-0 py-10 text-center ease-out 0s bg-dotnet hover:bg-dotnet_hover hover:bg-[#e56a39]'></div>
        <div className='bg-no-repeat bg-40% hover:duration-[800ms] bg-center border-solid border box-border h-40 px-0 py-10 text-center ease-out 0s bg-react_native hover:bg-react_native_hover hover:bg-[#5b19aa]'></div>
      </div>
    </section>
  );
};
