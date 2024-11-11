import React from 'react'
import Image from 'next/image'

const HeaderComponent = () => {
  return (
    /* Header start */

//     <div className="h-[95vh] grid grid-cols-1 md:grid-cols-2 bg-[url('/sindh-governor.png')] bg-cover bg-center relative resposive-header">
//     {/* White blur overlay */}
//     <div className="absolute inset-0 bg-white opacity-80 backdrop-blur-sm z-0"></div>

//     {/* Left Column Content */}
//     <div className="z-10 flex justify-center items-center h-full">
//       <div className="w-[500px] p-6 bg-opacity-80 rounded-lg">
//         <h1 className="text-[#044E83] text-[60px] font-bold leading-tight">
//           Governor Sindh
//         </h1>
//         <span className="text-[#044E83] text-[40px] block mt-2">
//           Kamran Khan Tessori
//         </span>
//         <p className="text-[#2EB6E8] text-[40px] font-extrabold mt-4 leading-none">
//           Certified Cloud Applied Generative AI Engineer (GenEng)
//         </p>
//         <p className="text-[#044E83] text-[25px] font-bold mt-4">
//           Earn up to $5,000 / month
//         </p>
//         <p className="text-[#044E83] text-[25px] font-bold mt-2">
//           Now admissions are open in Hyderabad
//         </p>
//         <div className="flex items-center justify-between mt-8">
//           <button className="bg-[#044E83] px-10 py-3 rounded text-white text-[20px] font-bold">
//             Apply Now
//           </button>
//           <div className="text-center">
//             <p className="text-[#044E83] text-[30px] font-extrabold">
//               562,143
//             </p>
//             <span className="text-[#0A5285] text-[16px]">Accepted Applications</span>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Right Column Image */}
//     <div className="relative w-[95%] h-[95%] mt-5 z-1 image">
//       <Image
//         className="rounded-lg"
//         src={'/cover.1d863e39.png'}
//         alt="Image of Governor"
//         layout="fill"
//         objectFit="cover"
//       />
//     </div>
//   </div>

<div className="h-[95vh] grid grid-cols-1 lg:grid-cols-2 bg-[url('/sindh-governor.png')] bg-cover bg-center relative responsive-header">
  {/* White blur overlay */}
  <div className="absolute inset-0 bg-white opacity-80 backdrop-blur-sm z-0"></div>

  {/* Left Column Content */}
  <div className="z-10 flex justify-center items-center h-full p-6 left-image-bg">
    <div className="max-w-full lg:w-[500px] p-6 bg-opacity-80 rounded-lg text-center lg:text-left">
      <h1 className="text-[#044E83] text-[40px] lg:text-[60px] font-bold leading-tight">
        Governor Sindh
      </h1>
      <span className="text-[#044E83] text-[30px] lg:text-[40px] block mt-2">
        Kamran Khan Tessori
      </span>
      <p className="text-[#2EB6E8] text-[25px] lg:text-[40px] font-extrabold mt-4 leading-none">
        Certified Cloud Applied Generative AI Engineer (GenEng)
      </p>
      <p className="text-[#044E83] text-[20px] lg:text-[25px] font-bold mt-4">
        Earn up to $5,000 / month
      </p>
      <p className="text-[#044E83] text-[20px] lg:text-[25px] font-bold mt-2">
        Now admissions are open in Hyderabad
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-8 space-y-4 lg:space-y-0">
        <button className="bg-[#044E83] px-6 py-3 lg:px-10 lg:py-3 rounded text-white text-[18px] lg:text-[20px] font-bold">
          Apply Now
        </button>
        <div className="text-center">
          <p className="text-[#044E83] text-[25px] lg:text-[30px] font-extrabold">
            562,143
          </p>
          <span className="text-[#0A5285] text-[14px] lg:text-[16px]">Accepted Applications</span>
        </div>
      </div>
    </div>
  </div>

  {/* Right Column Image */}
  <div className="relative w-full h-[300px] lg:w-[95%] lg:h-[95%] mt-5 z-1 image flex items-center justify-center">
    <Image
      className="rounded-lg"
      src={'/cover.1d863e39.png'}
      alt="Image of Governor"
      layout="fill"
      objectFit="cover"
    />
  </div>
</div>



    /* Header end */
  )
}

export default HeaderComponent
