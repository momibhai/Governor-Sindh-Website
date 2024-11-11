"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  // State for toggling dropdowns
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setSubDropdownOpen] = useState(false);

  // Toggle main dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    if (isSubDropdownOpen) setSubDropdownOpen(false); // Close subdropdown when main is toggled
  };

  return (
    <nav className='bg-[#044E83] h-20 py-2 px-3 flex justify-around items-center text-[#B9D8F3] sticky top-0 z-30 w-full'>
      {/* Logo */}
      <Image className="mt-[90px] z-10 sm:h-[90px] sm:w-[70px] md:mb-5 md:h-[100px] md:w-[80px] lg:h-[110px] lg:w-[90px]" src={'/logo.9ff76f62.png'} alt="Logo" width={95} height={95} />

      {/* Navbar Title */}
      <div className="text-2xl font-bold text-center text-[#F6F6F4] sm:text-[15px] sm:ml-[15px]">
        <h1 className="text-2xl font-bold text-center text-[#B9D8F3] custom-hide-lg">
          Tuition Free Education Program on Latest Technologies
        </h1>
        <span className="inline custom-hide-lg2 text-[#B9D8F3]">Tuition Free Program</span>
      </div>


      {/* Navbar Links */}
      <div>
        <ul className="flex space-x-10 text-[#F6F6F4] sm:space-x-[15px] sm:ml-[20px]">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/apply">Apply</Link></li>
          <li><Link href="/jobs">Jobs</Link></li>
          <li><Link href="/result">Result</Link></li>

          {/* Dropdown */}
          <li className="relative mt-[-10px] z-10">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full py-2 px-3 hover:text-[#F6F6F4]"
            >
              Courses
              <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            {/* Main Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-[-260px] z-10 font-normal bg-white text-[#63686b] divide-y divide-gray-100 w-[360px] dark:bg-gray-700 dark:divide-gray-400 shadow-[4px_4px_6px_rgba(0,0,0,0.3),-4px_4px_6px_rgba(0,0,0,0.3),0px_6px_6px_rgba(0,0,0,0.3)]">

                <ul className="py-2 text-sm">
                  <h2 className='text-xl font-bold ml-4 text-[#2b2b2e]'>Core Courses</h2>
                  <div className='ml-5 text-[15px] text-[#343438]'>
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Programming Fundamentals</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Web2 Using NextJS</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Learn as You Learn</Link>
                    </li>
                  </div>
                  <hr />
                </ul>

                <ul className="py-2 text-sm">
                  <h2 className='text-xl font-bold ml-4 text-[#2b2b2e]'>Advanced Courses</h2>
                  <div className='ml-5 text-[15px] text-[#343438]'>
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Web 3 and Metaverse</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Cloud-Native Computing</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Artificial Intelligence (AI) and Deep Learning</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Ambient Computing and IOT</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Genomics and Bionformatics</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Network Programmability and Automation</Link>
                    </li>
                  </div>
                  <hr />
                </ul>

              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
