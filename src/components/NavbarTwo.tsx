"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {

  return (
    <nav className='text-[#B9D8F3] flex justify-between items-center bg-[#044E83]'>
      {/* Logo */}
      <div>
        <Image className="sm:absolute z-10 ml-5" src={'/logo.9ff76f62.png'} alt="Logo" width={95} height={95} />
      </div>

      {/* Navbar Links */}
      <div className="absolute sm:relative sm:w-full inset-0 sm:h-20 bg-[#044E83] flex items-center px-5">
        <ul className="text-[#F6F6F4] flex flex-col sm:flex-row sm:justify-end sm:space-x-5 sm:mr-10 space-y-10 sm:space-y-0 ml-3 w-full sm:gap-5 sm:mt-5">
          <li>
            <Link href="/">Home</Link>
            <hr className="border-white w-[95%] sm:invisible mt-5 opacity-50 border-t-[0.5px]" />
          </li>
          <li>
            <Link href="/apply">Apply</Link>
            <hr className="border-white w-[95%] sm:invisible mt-5 opacity-50 border-t-[0.5px]" />
          </li>
          <li>
            <Link href="/jobs">Jobs</Link>
            <hr className="border-white w-[95%] sm:invisible mt-5 opacity-50 border-t-[0.5px]" />
          </li>
          <li>
            <Link href="/result">Result</Link>
            <hr className="border-white w-[95%] sm:invisible mt-5 opacity-50 border-t-[0.5px]" />
          </li>
        </ul>
      </div>



    </nav>
  );
};

export default Navbar;
