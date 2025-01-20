import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    // <div className="relative w-full h-[250px] sm:h-[250px] md:h-[300px] lg:h-[320px] xl:h-[350px] bg-[#9FDED8] overflow-hidden">
     <div className="relative w-full h-[310px] md:h-[380px] bg-[#9FDED8] overflow-hidden">
           <Image
          src="/images/hero2.png"
          alt="Hero Image"
          fill
          className="object-contain pl-[20px] hidden md:block"
          priority
        />
         <Image
          src="/images/cream.png"
          alt="Hero Image Mobile"
          fill
          className="object-contain block md:hidden "
          priority
        />
      
      </div>
    // <div className="relative w-full h-[250px] sm:h-[250px] md:h-[300px] lg:h-[320px] xl:h-[350px] bg-[#9FDED8] overflow-hidden">
    //    <div className="relative max-w-[1400px] mx-auto h-full flex justify-center">
        // <Image
        //   src="/images/hero2.png"
        //   alt="Hero Image"
        //   fill
        //   className="object-contain pl-[20px] hidden md:block"
        //   priority
        // />
        // <Image
        //   src="/images/hero-shakes.png"
        //   alt="Hero Image Mobile"
        //   fill
        //   className="object-contain pl-[20px] block md:hidden -translate-y-5"
        //   priority
        // />
    //     <div className="absolute bottom-0 block md:hidden ">
    //     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#525A61] mb-4">
    //                THE CREAM OF THE CROP
    //             </h1>

    //     </div>
    //   </div>
    // </div>
  );
};

export default HeroSection;
// import React from "react";
// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <div className="relative w-full h-[400px] bg-[#9FDED8] overflow-hidden">
//       {/* Wider container for image */}
//       <div className="flex-1 max-w-[1600px] mx-auto px-4 h-full flex items-center justify-center relative overflow-hidden">
//         <div className="h-full min-w-[1200px] relative flex justify-center items-center overflow-hidden">
//           <Image
//             src="/images/group15.png"
//             alt="Hero Image"
//             width={1200}
//             height={500}
//             style={{ objectFit: 'cover' }}
//             priority
//           />
//         </div>

//         {/* Overlay container that aligns with main content width */}
//         <div className="absolute w-full left-1/2 -translate-x-1/2">
//           <div className="max-w-7xl mx-auto px-4 relative">
//             {/* Overlay content */}
//             <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full max-w-xl">
//              {/* <div className="bg-[#98C1BD] rounded-lg p-8 md:p-12 backdrop-blur-sm bg-opacity-40 ml-5 max-w-[90%]">  */}
//                <div className="bg-[#000000] rounded-lg p-8 md:p-8  bg-opacity-40 ml-5 max-w-[90%]">
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//                   THE CREAM OF THE CROP
//                 </h1>
//                 <p className="text-lg md:text-xl text-white/90">
//                   Indulge in sweet, creamy perfection with our triple-threat
//                   milkshakes, crafted with fresh ingredients.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
