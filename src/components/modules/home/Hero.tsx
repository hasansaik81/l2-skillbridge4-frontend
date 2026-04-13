// "use client";

// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export default function HeroCarousel() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 3000, stopOnInteraction: true })
//   );

//   const slides = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
//       title: "Explore Nature",
//       description: "Discover the beauty of the world with us.",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
//       title: "Adventure Awaits",
//       description: "Get ready for your next great journey.",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
//       title: "Travel Smart",
//       description: "Plan your trips with ease and comfort.",
//     },
//   ];

//   return (
//     <div className="w-full  mx-auto py-10">
//       <Carousel plugins={[plugin.current]} className="w-full">
//         <CarouselContent>
//           {slides.map((slide, index) => (
//             <CarouselItem key={index}>
//               <div className="relative">
//                 {/* Image */}
//                 <img
//                   src={slide.image}
//                   alt={slide.title}
//                   className="w-full h-[400px] object-cover rounded-2xl"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center">
//                   <div className="text-center text-white px-4">
//                     <h2 className="text-3xl md:text-5xl font-bold mb-4">
//                       {slide.title}
//                     </h2>
//                     <p className="mb-6 text-lg md:text-xl">
//                       {slide.description}
//                     </p>

//                     <button className="bg-white text-black px-6 py-2 rounded-xl font-semibold hover:bg-gray-200 transition">
//                       Get Started
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// }



"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function SkillBridgeHero() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      title: "Build Your Future Skills",
      description:
        "Join SkillBridge and start learning in-demand skills today.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "Learn From Experts",
      description:
        "Get guidance from industry professionals and mentors.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      title: "Start Your Career Journey",
      description:
        "Bridge the gap between learning and real-world success.",
    },
  ];

  return (
    <div className="w-full  mx-auto py-10">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative">
                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[450px] object-cover rounded-2xl"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white px-6">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                      {slide.title}
                    </h2>

                    <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
                      {slide.description}
                    </p>

                    <button className="bg-white text-black px-6 py-2 rounded-xl font-semibold hover:bg-gray-200 transition">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}