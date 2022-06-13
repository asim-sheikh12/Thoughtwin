import Image from 'next/image';
import React from 'react';
import { icons } from '../constants';

const About = () => {
  return (
    <section>
      <div className='h-auto bg-about_us_banner bg-repeat-x  bg-fixed bg-[left_bottom_0rem] bg-[#f6f6f6]'>
        <p className='font-Formular font-thin text-[#5E6469] text-xl text-center pt-7 '>
          We are a community of friendly, open-minded,
        </p>
        <p className='font-Formular font-thin text-[#5E6469] text-xl text-center'>
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
      <div className='flex box-border my-24 flex-wrap px-28'>
        <div className='flex flex-1 justify-center font-Formular '>
          <Image src={icons.about_icon1} />
          <div>
            <span className='box-border font-bold text-6xl pl-6'>04</span>
            <h1 className='box-border text-[#5E6469]  inline-block font-semibold text-lg leading-none mx-2.5 mt-0 mb-7 pt-12 text-center'>
              YEARS IN
              <br />
              BUSINESS
            </h1>
          </div>
        </div>
        <div className='flex flex-1 justify-center font-Formular '>
          <Image src={icons.about_icon2} />
          <div>
            <span className='box-border font-bold text-6xl pl-6'>200+</span>
            <h1 className='box-border text-[#5E6469] inline-block font-semibold text-lg leading-none mx-2.5 mt-0 mb-7 pt-12 text-center'>
              TEAM
              <br />
              MEMBERS
            </h1>
          </div>
        </div>
      </div>
      <div className='flex justify-around px-36  mb-24  mt-32'>
        <div className='text-center'>
          <Image src={icons.about_icon3} />
          <br />
          <span className='font-Formular text-[#757575] box-border font-thin leading-5 mx-0 mb-0 mt-5'>
            100+
          </span>
          <h1 className='font-Formular text-[#757575] box-border font-thin text-lg leading-5 mx-0 mt-0 mb-4'>
            Happy <br />
            clients
          </h1>
        </div>
        <div className='text-center'>
          <Image src={icons.about_icon4} />
          <br />
          <span className='font-Formular box-border text-[#757575] font-thin leading-5 mx-0 mb-0 mt-5'>
            130+
          </span>
          <h1 className='font-Formular text-[#757575] box-border font-thin text-lg leading-5 mx-0 mt-0 mb-4'>
            Successful <br />
            projects
          </h1>
        </div>
        <div className='text-center'>
          <Image src={icons.about_icon5} />
          <br />
          <span className='font-Formular box-border text-[#757575] font-thin leading-5 mx-0 mb-0 mt-5'>
            10k+
          </span>
          <h1 className='font-Formular text-[#757575] box-border font-thin text-lg leading-5 mx-0 mt-0 mb-4'>
            Accepted <br />
            User Stories
          </h1>
        </div>
      </div>
      <div className='flex justify-around'>
        <div className='md:w-1/4 pr-4 pl-4'>
          <Image src={icons.about_left} />
        </div>
        <div className='md:w-1/2 pr-4 pl-4'>
          <h1 className='box-border font-normal text-4xl leading-none mx-0 mt-0 mb-7 p-0 text-left'>
            India, Canada...
          </h1>
          <p className='font-Formular text-[#757575] box-border font-thin leading-5 mx-0 mt-0 mb-4 text-sm'>
            ThoughtWin is a renamed name in web/mobile design,
            <br />
            development in the software industry, but – WHY? This is because we
            design
            <br />
            and develop websites that represent your company and spread across
            the globe.
            <br />
            The client's continued support, trust and recommendations
            <br />
            are sufficient to describe the quality of our work.
          </p>
          <span className='box-border block float-left'>
            <div className='border-none box-border mb-0 ml-0  mr-2.5 w-5'>
              <Image src={icons.arrow} alt='arrow indication' />
            </div>
          </span>
          <p className='font-Formular text-[#222] box-border table font-thin text-base leading-5 mx-0 mb-4 mt-3.5'>
            We define the goals, analyze the requirements and set the project
            schedule.
          </p>
          <span className='box-border block float-left'>
            <div className='border-none box-border mb-0 ml-0  mr-2.5 w-5'>
              <Image src={icons.arrow} alt='arrow indication' />
            </div>
          </span>
          <p className='font-Formular text-[#222] box-border table  font-thin text-base leading-5 mx-0 mb-4 mt-3.5'>
            Depending on your objectives and goals, a sensible approach is taken
            whereby
            <br /> solutions are developed to meet the needs of your
            organization.
          </p>
          <span className='box-border block float-left'>
            <div className='border-none box-border mb-0 ml-0  mr-2.5 w-5'>
              <Image src={icons.arrow} alt='arrow indication' />
            </div>
          </span>
          <p className='font-Formular text-[#222] box-border table font-thin text-base leading-5 mx-0 mb-4 mt-3.5'>
            The company believes in offering high end web solutions at
            affordable prices.
          </p>
          <span className='box-border block float-left'>
            <div className='border-none box-border mb-0 ml-0  mr-2.5 w-5'>
              <Image src={icons.arrow} alt='arrow indication' />
            </div>
          </span>
          <p className='font-Formular text-[#222] box-border table font-thin text-base leading-5 mx-0 mb-4 mt-3.5'>
            The achievement of perfection is our goal, but Excellence is
            guaranteed.
          </p>
          <span className='box-border block float-left'>
            <div className='border-none box-border mb-0 ml-0  mr-2.5 w-5'>
              <Image src={icons.arrow} alt='arrow indication' />
            </div>
          </span>
          <p className='font-Formular text-[#222] box-border table font-thin text-base leading-5 mx-0 mb-4 mt-3.5'>
            We not only sell Web sites, we create Web sites that SELL.
          </p>
          <span className='box-border block float-left'>
            <div className='border-none box-border mb-0 ml-0  mr-2.5 w-5'>
              <Image src={icons.arrow} alt='arrow indication' />
            </div>
          </span>
          <p className='font-Formular text-[#222] box-border table font-thin text-base leading-5 mx-0 mb-4 mt-3.5'>
            We love what we do and we do what our customers love and work with
            excellent customers from around the world to achieve their goals.
          </p>
          <p className='font-Formular text-[#b0aaaa] box-border font-thin text-base leading-5 mx-0 mt-9 mb-12'>
            We have successfully delivered a variety of websites such as
            e-commerce sites (B2B+B2C), enterprise directories, CMS websites,
            data-driven websites, blog websites, community websites, mobile
            applications, etc. We currently have a full-time in-house resource
            team with senior programmers, mid-level programmers, graphic
            designers, front-line developers, a project manager and a business
            analyst. We are a team of amazingly talented undergraduate
            engineers. What this means is that we will have continued access to
            a wealth of resources and information. We support businesses
            worldwide.
          </p>
        </div>
        <div className='md:w-1/4 pr-4 pl-4'>
          <Image src={icons.about_right} />
        </div>
      </div>
    </section>
  );
};

export default About;
