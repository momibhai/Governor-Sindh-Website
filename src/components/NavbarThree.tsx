
'use client'
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from 'react';


export default function NavComponent() {
    // State for toggling dropdowns
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isSubDropdownOpen, setSubDropdownOpen] = useState(false);

     // Toggle main dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    if (isSubDropdownOpen) setSubDropdownOpen(false); // Close subdropdown when main is toggled
  };

  return (
    <div className="flex items-center justify-between px-4 md:px-[100px] sm:h-20 h-[70px] py-4 bg-[#054e83] dark:bg-gray-800">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <Image className="sm:w-[90px] w-[70px] mt-20 z-10" src={'/logo.9ff76f62.png'} alt="Logo" width={95} height={95} />
      </Link>

       {/* Navbar Title */}
      <div className="text-2xl font-bold text-center text-[#F6F6F4] sm:text-[15px] sm:ml-[15px]">
        <h1 className="text-2xl font-bold text-center text-[#B9D8F3] custom-hide-lg">
          Tuition Free Education Program on Latest Technologies
        </h1>
        <span className="inline custom-hide-lg2 text-[#B9D8F3] tuition-free">Tuition Free Program</span>
      </div>

      <div className="hidden less-sm-disable md:flex gap-4 lg:gap-10 ">
        {/* Top-level Links */}
      <Link href="#" className="lg:text-lg text-[15px] font-medium hover:underline underline-offset-4 text-[#e3f3ed]" prefetch={false}>
        Home
      </Link>
      <Link href="#" className="lg:text-lg text-[15px] font-medium hover:underline underline-offset-4 text-[#e3f3ed]" prefetch={false}>
        Apply
      </Link>
      <Link href="#" className="lg:text-lg text-[15px] font-medium hover:underline underline-offset-4 text-[#e3f3ed]" prefetch={false}>
        Jobs
      </Link>
      <Link href="#" className="lg:text-lg text-[15px] font-medium hover:underline underline-offset-4 text-[#e3f3ed]" prefetch={false}>
        Result
      </Link>

      {/* Dropdown Menu */}
      <div className="relative">
        <button onClick={toggleDropdown} className="lg:text-lg text-[15px] font-medium hover:underline underline-offset-4 text-[#e3f3ed] flex items-center">
          Courses
          <svg className="w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute z-10 mt-2 w-72 custom bg-white shadow-lg rounded-md divide-y divide-gray-100 text-[#63686b] dark:bg-gray-700 dark:divide-gray-400">
            {/* Core Courses Section */}
            <ul className="py-2 text-sm">
              <h2 className="text-xl font-bold ml-4 text-[#2b2b2e]">Core Courses</h2>
              <div className="ml-5 text-[15px] text-[#343438]">
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
            </ul>

            {/* Advanced Courses Section */}
            <ul className="py-2 text-sm">
              <h2 className="text-xl font-bold ml-4 text-[#2b2b2e]">Advanced Courses</h2>
              <div className="ml-5 text-[15px] text-[#343438]">
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
            </ul>
          </div>
        )}
      </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="sm:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid w-[200px] p-4">
            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
              Portfolio
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}