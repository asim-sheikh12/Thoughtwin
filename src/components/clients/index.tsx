import Image from 'next/image';
import React from 'react';
import { icons } from '../../constants';

export const Clients = () => {
  return (
    <section className='py-14'>
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
    </section>
  );
};
