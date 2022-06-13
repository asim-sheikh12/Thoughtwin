import Image from 'next/image';
import React from 'react';
import { icons } from '../constants';

const Contact = () => {
  return (
    <div className='bg-contactus_banner h-[55vh] bg-cover bg-[left_bottom_0rem] relative'>
      <div className='flex flex-col justify-center box-border'>
        <div className=''>
          <div className='border-white rounded-full border-solid border box-border h-24 max-w-full object-cover w-24'>
            <Image src={icons.hr1} className='rounded-full' />
          </div>
          <h1>Karishma Agrawal</h1>
          <p>
            <span>HR Manager</span> at Thoughtwin
          </p>
          <p>+91 9977069348</p>
        </div>
        <div className='vg'>
          <div className='border-white rounded-full border-solid border box-border h-24 max-w-full object-cover w-24'>
            <Image src={icons.hr2} className='rounded-full' />
          </div>
          <h1>Shreeya Sarmandal</h1>
          <p>
            <span>HR Executive</span> at Thoughtwin
          </p>
          <p>+91 8839947483</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
