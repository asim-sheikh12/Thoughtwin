import React from 'react';
const Banner = () => {
  return (
    <div>
      <video
        className='banner_video'
        controls={false}
        autoPlay={true}
        loop={true}
        src={'/banner_video.mp4'}
        style={{ width: '1350px' }}
        typeof='video/mp4'
      />
      <div className='absolute text-white top-48 left-32 leading-[5rem] font-Rajdhani text-6xl	font-bold max-w-2xl'>
        <span>
          Innovative and intelligent technology solutions and services
        </span>
        <div>
          <button className='p-6 bg-white text-red rounded-full h-16 w-72	font-Formular font-bold text-base leading-[0.6rem] hover:bg-black transition duration-500  hover:text-white hover:ease-out'>
            Schedule A Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
