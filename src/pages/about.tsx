import Image from 'next/image';
import React from 'react';
import { icons } from '../constants';

const About = () => {
  return (
    <section className=''>
      <div className='h-auto bg-about_us_banner bg-repeat-x  bg-fixed bg-[left_bottom_0rem]  bg-[#f6f6f6]'>
        <p className='font-Formular font-medium text-[#4d4d4d] text-xl text-center pt-7 '>
          We are a community of friendly, open-minded,
        </p>
        <p className='font-Formular font-medium text-[#4d4d4d] text-xl text-center'>
          collaborative and professionally growing people
        </p>
        <div className=' mt-10 mb-3 flex justify-center'>
          <p className='font-Rajdhani text-[#e86258] text-lg cursor-pointer mr-2'>
            Meet our team{' '}
          </p>
          <Image
            src={icons.meetourteam}
            alt=''
            height='20'
            width='25'
            className='cursor-pointer'
          />
        </div>
        <div className='flex justify-around px-28'>
          <Image src={icons.team1} />
          <Image src={icons.team2} />
          <Image src={icons.team3} />
          <Image src={icons.team4} />
        </div>
      </div>
      <div>
        <div>
          <Image src={icons.about_icon1} />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default About;
