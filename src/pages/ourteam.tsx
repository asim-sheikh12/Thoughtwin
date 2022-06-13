import Image from 'next/image';
import React from 'react';
import { icons } from '../constants';

const Ourteam = () => {
  return (
    <section>
      <div className='h-[120vh] bg-ourteam bg-cover bg-[left_bottom_0rem] relative'>
        <div className='absolute top-1/2 left-1/3'>
          <p className='font-Formular font-thin text-white text-xl text-center pt-7 '>
            We are a community of friendly, open-minded,
          </p>
          <p className='font-Formular font-thin text-white text-xl text-center'>
            collaborative and professionally growing people.
          </p>
          <div className='mt-10 mb-3 flex justify-center'>
            <a className='bg-gradient-to-r from-[#ef6e3b] to-[#d53fa8] text-white px-9 py-2 rounded cursor-pointer hover:from-[#d53fa8] hover:to-[#ef6e3b]'>
              Join the team
            </a>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex-1 text-center py-12 border border-solid border-r box-border px-0'>
          <Image src={icons.career} />
          <h1 className='box-border font-bold text-4xl m-2.5 text-[#222]'>
            Careers
          </h1>
        </div>
        <div className='flex-1 text-center py-12'>
          <Image src={icons.career} />
          <h1 className='box-border font-bold text-4xl m-2.5 text-[#222]'>
            Contact Us
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Ourteam;
