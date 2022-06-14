import Image from 'next/image';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { icons } from '../constants';
import { Indian_Time } from '../components/Clocks/Indian_Time';

const Contact = () => {
  return (
    <>
      <div className='bg-contactus_banner h-auto bg-no-repeat bg-contain  bg-[center_top_-4rem] flex'>
        <div className='flex flex-col flex-1 relative'>
          <div className='h-36 mt-24 text-center border-[#e0e0e0] bg-[#fff] border rounded-xl w-64 ml-48 shadow-[0_4px_35px_#ff31311a]'>
            <div className='max-w-full -mt-16 h-24 w-24 object-cover ml-20 border-white border-solid border box-border rounded-full'>
              <Image
                src={icons.hr1}
                alt='Karishma Agrawal'
                className='rounded-full'
              />
            </div>
            <h2 className='font-Fromular not-italic font-medium text-xl text-black mt-2 mb-2'>
              Karishma Agrawal
            </h2>
            <ul>
              <li className='font-Fromular text-[#333] not-italic font-normal text-sm leading-5 pb-2'>
                <span className='font-Fromular text-[#FF0000]'>HR Manager</span>{' '}
                at Thoughtwin
              </li>
              <li className='font-Fromular text-[#333] not-italic font-normal text-sm leading-5 pb-2'>
                +91 9977069348
              </li>
            </ul>
          </div>

          <div className='h-36 text-center bg-[#fff] border border-[#e0e0e0] rounded-xl w-64 ml-80 mt-32 shadow-[0_4px_35px_#ff31311a]'>
            <div className='max-w-full -mt-16 h-24 w-24 object-cover ml-20 border-white border-solid border box-border rounded-full'>
              <Image
                src={icons.hr2}
                alt='Shreeya Sarmandal'
                className='rounded-full'
              />
            </div>
            <h2 className='font-Fromular not-italic font-medium text-xl text-black mt-2 mb-2'>
              Shreeya Sarmandal
            </h2>
            <ul>
              <li className='font-Fromular text-[#333] not-italic font-normal text-sm leading-5 pb-2'>
                <span className='font-Fromular text-[#FF0000]'>
                  HR Executive{' '}
                </span>{' '}
                at Thoughtwin{' '}
              </li>
              <li className='font-Fromular text-[#333] not-italic font-normal text-sm leading-5 pb-2'>
                +91 8839947483
              </li>
            </ul>
          </div>
        </div>
        <div className='font-Formular bg-email bg-no-repeat bg-[top_right_3rem] flex-1 bg-white rounded-2xl box-border h-auto shadow-[0_4px_35px_#ff31311a]  p-5  pl-14 mt-36 mr-14 ml-32 '>
          <h1 className='box-border font-bold text-3xl leading-9 m-0 text-left text-black not-italic'>
            Drop us a line
          </h1>
          <p className='box-border font-normal text-base leading-5 mx-0 mt-0 mb-4 p-0 text-left not-italic text-[#777]'>
            Prepare for a quick response :)
          </p>
          <form>
            <div className='grid grid-rows-4 grid-flow-col'>
              <label className='font-Formular box-border block font-normal text-black not-italic'>
                First Name
              </label>
              <input
                type='text'
                name='fname'
                className='font-Formular rounded border-solid border box-border -mt-2.5 mb-2.5 h-11 text-base  overflow-visible px-2.5  pb-1.5 w-52 mr-9 focus:outline-none'
                placeholder='First Name'
                required
              />
              <label className='font-Formular'>Email</label>
              <input
                type='text'
                name='email'
                className='font-Formular rounded border-solid border box-border h-11 -mt-2.5  text-base overflow-visible px-2.5  pb-1.5 w-52 focus:outline-none'
                placeholder='Your Email'
                required
              />
              <label className='font-Formular'>Last Name</label>
              <input
                type='text'
                name='lname'
                className='font-Formular rounded border-solid border box-border h-11 text-base -mt-2.5 overflow-visible px-2.5  pb-1.5 w-52 focus:outline-none'
                placeholder='Last Name'
                required
              />
              <label className='font-Formular'>Contact Number</label>
              <input
                className='font-Formular rounded border-solid border box-border h-11 text-base -mt-2.5 overflow-visible px-2.5  pb-1.5 w-52 focus:outline-none'
                placeholder='Enter Mobile'
                required
              />
            </div>
            <label className='font-Formular mt-5 mb-5'>Message</label>
            <br />
            <input
              type='text'
              name='message'
              className='font-Formular rounded border-solid border box-border h-11 text-base mt-0 overflow-visible px-2.5  pb-1.5 w-[488px] focus:outline-none'
              placeholder='Write something here...'
              required
            />
            <div className='left-1/2 mt-5'>
              <ReCAPTCHA sitekey='6LfILAIeAAAAAAoxxeSdSLcBz3iAXmpmsA_LrgS1' />
            </div>
            <button className='font-Formular transition duration-500 bg-white text-red rounded-full border-black border-solid border box-border cursor-pointer block font-medium h-14 mb-0 mt-3 ml-auto overflow-visible mr-5 py-1.5 text-center not-italic normal-case no-underline w-full hover:text-white hover:bg-red hover:border-transparent'>
              Submit
            </button>
          </form>
        </div>
      </div>
      <section className='box-border block relative text-center md:mt-0 lg:mt-0'>
        <div className='box-border'>
          <div className='bg-no-repeat box-border h-auto px-0 py-10 relative w-full'>
            <h4 className='bg-white box-border inline-block font-medium text-3xl mb-5 ml-10 -mt-8 uppercase'>
              {' '}
              Our Offices
            </h4>
            <div className='bg-white rounded-lg border-solid border box-border mb-5 px-5 py-2.5 text-left w-full'>
              <div className='box-border'>
                <div className='contact_detail'>
                  <div className='row'>
                    <div className='col-md-6 col-6 indian clock11'>
                      <Image src={icons.taj} className='taj' alt='taj' />
                      <h2>india</h2>
                    </div>
                    <div className='col-md-6 col-6 indian clock12'>
                      <ul id='clock'>
                        <li id='sec'></li>
                        <li id='hour'></li>
                        <li id='min'></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-6 mt-md-0 mt-4'>
                <div className='contact_detail'>
                  <div className='row'>
                    <div className='col-md-6 col-6 indian clock11'>
                      <Image
                        src={icons.canada}
                        className='imgcanada'
                        alt='canada time'
                      />
                      <h2>Canada</h2>
                    </div>
                    <div className='col-md-6 col-6 indian clock12'>
                      <ul id='clock1'>
                        <li id='sec1'></li>
                        <li id='hour1'></li>
                        <li id='min1'></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='addr'>
            <h4 className='d-md-inline-block d-none'> Our Offices</h4>

            <div className='row'>
              <div className='col-md-4 right_bor'>
                <div className='add_box'>
                  <h2>Indore - Head Office</h2>
                  <ul>
                    <li>
                      <Image
                        src={icons.location}
                        className='loaction'
                        alt='location'
                      />
                      <p>
                        Address:
                        <span className='color-grey'>
                          {' '}
                          11 Sachidanand Nagar Annapurna Road, Indore (M.P.) -
                          452001
                        </span>
                      </p>
                    </li>
                    <li>
                      <Image
                        src={icons.phoneIcon}
                        className='loaction'
                        alt='location'
                      />
                      <p>
                        Contact:{' '}
                        <span className='color-blue'>+919977069348</span>
                      </p>
                    </li>
                    <li>
                      <Image
                        src={icons.mail}
                        className='loaction'
                        alt='location'
                      />
                      <p>
                        Email:{' '}
                        <span className='color-blue'>hr@thoughtwin.com</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-md-4 right_bor'>
                <div className='add_box'>
                  <h2>Indore - Branch Office</h2>
                  <ul>
                    <li>
                      <Image
                        src={icons.location}
                        className='loaction'
                        alt='location'
                      />
                      <p>
                        Address:
                        <span className='color-grey'>
                          {' '}
                          First Floor, 173 PU4,Scheme No. 54,Behind Malhar Mega
                          Mall, Vijay Nagar, Indore (M.P.) - 452010
                        </span>
                      </p>
                    </li>
                    <li>
                      <Image
                        src={icons.phoneIcon}
                        className='loaction'
                        alt='location'
                      />
                      <p>
                        Contact:{' '}
                        <span className='color-blue'>+919977069348</span>
                      </p>
                    </li>
                    <li>
                      <Image
                        src={icons.mail}
                        className='loaction'
                        alt='location'
                      />
                      <p>
                        Email:{' '}
                        <span className='color-blue'>hr@thoughtwin.com</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='add_box left_bor'>
                  <h2>Neemuch - Branch Office </h2>
                  <ul>
                    <li>
                      <Image
                        src={icons.location}
                        className='loaction'
                        alt='location'
                      />
                      <p>
                        Address:
                        <span className='color-grey'>
                          {' '}
                          Bungalow No. 07, Behind IDBI Bank, Neemuch (M.P.) -
                          458441{' '}
                        </span>
                      </p>
                    </li>
                    <li>
                      <Image
                        src={icons.phoneIcon}
                        className='loaction'
                        alt='phone'
                      />
                      <p>
                        Contact:{' '}
                        <span className='color-blue'>+919522312777</span>
                      </p>
                    </li>
                    <li>
                      <Image
                        src={icons.mail}
                        className='loaction'
                        alt='email'
                      />
                      <p>
                        Email:{' '}
                        <span className='color-blue'>
                          thoughtwin.priya@gmail.com
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='border_divide'></div>

            <div className='row'>
              <div className='col-md-12'>
                <div className='add_box'>
                  <h2>Canada Office</h2>
                  <ul>
                    <li className='w-100'>
                      <Image
                        src={icons.location}
                        className='loaction'
                        alt='location'
                      />
                      <p>
                        Address:
                        <span className='color-grey'>
                          {' '}
                          3145 Goretti place Mississauga ON,Canada
                        </span>
                      </p>
                    </li>

                    <li className='w-100'>
                      <Image
                        src={icons.mail}
                        className='loaction'
                        alt='email'
                      />
                      <p>
                        Email:{' '}
                        <span className='color-blue'>info@thoughtwin.Com</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
