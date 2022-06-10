import React from 'react';
import Navbar from '../components/navbar';

const Layouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layouts;
