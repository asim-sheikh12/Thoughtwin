import React from 'react';
import { Footer } from '../components/footer';
import Navbar from '../components/navbar';

const Layouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layouts;
